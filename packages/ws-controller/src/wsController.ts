/* eslint-disable @typescript-eslint/no-unused-vars */
import merge from "ts-deepmerge";
import {
  SocketStatus,
  promiseCb,
  HeartbeatConfig,
  WsConfig,
} from "./types";
import EventsCollect from "./EventsCollect";
import { Heartbeat } from "./Heartbeat";
import { reExecute, cancelablePromise } from "@zsjs/utils";

// @ts-ignore
let wsInstance: WebSocket | null = null;

export class WsController {
  // config
  options: WsConfig = {
    address: "",
    connectTimeout: 5000,
    reconnectIntervalTime: 2000,
    retry: 2,
    onOpened: function (this: WsController) { },
  };

  // state
  _connectStatus: SocketStatus = SocketStatus.closed;

  get connectStatus(): SocketStatus {
    return this._connectStatus;
  }

  set connectStatus(status: SocketStatus) {
    this._connectStatus = status;
    this.events.dispatchEvent<SocketStatus>("status", this._connectStatus);
  }

  closingCb: promiseCb = {
    resovle: null,
    reject: null,
  };
  pause: boolean = false;
  connectingTimer: NodeJS.Timeout | null = null;

  heartbeat = new Heartbeat({ wsController: this });
  events: EventsCollect = new EventsCollect(["message", "log", "status"]);

  socketConnect?: { promise: Promise<any>, cancel: Function };

  constructor(options: {
    wsOptions?: WsConfig;
    heartbeatOptions?: HeartbeatConfig;
  }) {
    this.setOptions(options);
  }

  setOptions({
    wsOptions,
    heartbeatOptions,
  }: {
    wsOptions?: WsConfig;
    heartbeatOptions?: HeartbeatConfig;
  }) {
    this.options = merge(this.options, wsOptions ?? {});
    this.heartbeat.setOptions(heartbeatOptions);
  }

  _startWsConnect(address: string, retryCount: number = 0, intervalTime: number = 0) {
    const that = this;

    console.log('_startWsConnect>>>', address)
    const ws = () => {
      return new Promise<object>((resolve, reject) => {

        // @ts-ignore
        wsInstance = new WebSocket(address);

        // onopen
        wsInstance.onopen = function (ev: any) {
          console.log('onopen', that.connectStatus)
          if (that.connectStatus == SocketStatus.connecting) {
            const message = "Websocket start success.";
            that.events.dispatchEvent<string>("log", message);
            resolve({ success: true, message })
          }
        };

        // onmessage
        wsInstance.onmessage = function (ev: MessageEvent) {
          console.log('onmessage', that.connectStatus)
          that.heartbeat.received(ev);
          if (that.pause) {
            return;
          }

          that.events.dispatchEvent<MessageEvent>("message", ev);
        };

        // onerror
        wsInstance.onerror = function (ev: any) {
          console.log('Websocket onerror:', that.connectStatus)
          if (that.connectStatus == SocketStatus.connecting) {
            const message = `Websocket onerror:${ev}`;
            reject(new Error(message));
            console.log('Websocket onerror: connecting', that.connectStatus, reject)
            that.events.dispatchEvent("log", message);
          } else if (that.connectStatus == SocketStatus.closing) {
            that.closingCb?.reject?.(new Error(`Websocket onerror:${ev}`));
          }
        };

        // onclose
        wsInstance.onclose = function (ev: any) {
          console.log('onclose', that.connectStatus)
          if (that.connectStatus == SocketStatus.closing) {
            const message = "Websocket closed success";
            that.closingCb?.resovle?.({ success: true, message });
            that.events.dispatchEvent<string>("log", message);
          }
        };


      })
    }

    return reExecute<Object>({
      cb: () => cancelablePromise(ws(), that.options.connectTimeout).promise,
      retryCount,
      intervalTime,
      event: (message) => this.events.dispatchEvent<string>("log", message)
    });
  }

  async connect(options?: {
    address?: string;
    connectTimeout?: number
  },
    retryCount: number = 3,
    intervalTime: number = 0
  ): Promise<Object> {
    return new Promise<any>(async (resovle, reject) => {
      try {
        let connectConfig = merge(this.options, options ?? {}) as WsConfig;

        if (this.connectStatus == SocketStatus.connected) {
          const message = "Websocket already connected";
          this.events.dispatchEvent<string>("log", message);
          return resovle({ success: true, message });
        }

        if (!connectConfig.address) {
          const message = "Websocket adress not exsit";
          this.events.dispatchEvent<string>("log", message);
          throw new Error(message);
        }

        if (this.connectStatus !== SocketStatus.closed) {
          const message = `Websocket connect failed: connectStatus current is ${this.connectStatus} not closed`;
          throw new Error(message);
        }

        // set webSocket instance
        this.connectStatus = SocketStatus.connecting;

        // start conncet
        this.socketConnect?.cancel();
        this.socketConnect = undefined;
        this.socketConnect = this._startWsConnect(connectConfig.address as string, retryCount, intervalTime);
        let res = await this.socketConnect.promise;
        
        this.connectStatus = SocketStatus.connected;

        this.options.onOpened?.(this);

        // start heartbeat;
        setTimeout(() => {
          this.heartbeat.send();
        }, 1000);

        resovle(res)
        console.log('connect>>>: success', this.connectStatus)
      } catch (error) {
        this.connectStatus = SocketStatus.closed;
        console.log('connect>>>: error', error)

        let errorMsg = `${error}`;
        if (error instanceof Error) {
          errorMsg = error.message;
        }
        const message = `connect failed: ${errorMsg}`;
        this.events.dispatchEvent<string>("log", message);
        reject(new Error(message));
      }
    });
  }

  closingTimer: NodeJS.Timeout | undefined;
  async _wsClose(): Promise<{ message: string, success: boolean }> {
    return new Promise((resovle, reject) => {

      clearTimeout(this.closingTimer)
      this.closingTimer = setTimeout(() => {
        const message = `Websocket close were timeout so it forced shutdown`;
        resovle({ success: true, message });
        clearClose();
      }, 2000);


      const clearClose = () => {
        this.closingCb.resovle = null;
        this.closingCb.reject = null;
        clearTimeout(this.closingTimer);
      }

      this.closingCb.resovle = () => {
        const message = `Websocket closed`;
        resovle({ success: true, message });
        clearClose();
      };

      this.closingCb.reject = (e: Error) => {
        const message = `Websocket closed error: ${JSON.stringify(e.message)}`;
        resovle({ success: true, message });
        clearClose();
      };

      wsInstance?.close();
    });
  }


  /**
   * Close websocket
   */
  async close() {
    return new Promise(async (resovle, reject) => {
      if (this.connectStatus == SocketStatus.closed) {
        const message = `Websocket already closed`;
        this.events.dispatchEvent<string>("log", message);
        return resovle({ success: true, message });
      }

      if (this.connectStatus !== SocketStatus.connected) {
        const message = `Websocket close filed: connectStatus current is ${this.connectStatus} not in connected.`;
        this.events.dispatchEvent<string>("log", message);
        return reject(new Error(message));
      }

      // set socket instance
      this.connectStatus = SocketStatus.closing;
      const { message } = await this._wsClose();
      this.events.dispatchEvent<string>("log", message);
      this.connectStatus = SocketStatus.closed;
      this.socketConnect?.cancel();
      this.heartbeat.clear();
      resovle({ success: true, message });
    });
  }

  /**
   * Send msg
   * @param {string} msg - The event name.
   */
  send(msg: string) {
    if (this.connectStatus !== SocketStatus.connected) {
      const message = `Websocket send error: connectStatus not in connected status.`;
      this.events.dispatchEvent<string>("log", message);
      throw new Error(message);
    }
    wsInstance?.send(msg);
  }

  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener<T>(
    eventName: "message" | "log" | "status",
    fun: (e: T) => void
  ) {
    this.events.addEventListener(eventName, fun);
  }

  /**
   * remove a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  removeEventListener(eventName: "message" | "log" | "status", fun: Function) {
    this.events.removeEventListener(eventName, fun);
  }
}
