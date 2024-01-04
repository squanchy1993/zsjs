/* eslint-disable @typescript-eslint/no-unused-vars */
import merge from "ts-deepmerge";
import { XPromise, SocketStatus, promiseCb, HeartbeatConfig, WsConfig } from "./types";
import EventsCollect from "./EventsCollect"
import { Heartbeat } from "./Heartbeat";

// @ts-ignore
let wsInstance: WebSocket | null = null;

export class WsContoller {
  // config
  options: WsConfig = {
    address: '',
    connectTimeout: 5000,
    reconnectIntervalTime: 2000,
    retry: 2,
    onOpened: function (this: WsContoller) { }
  }

  // state
  connectStatus: SocketStatus = SocketStatus.closed;
  connectingCb: promiseCb = {
    resovle: null,
    reject: null,
  };
  closingCb: promiseCb = {
    resovle: null,
    reject: null,
  };
  pause: boolean = false;
  connectingTimer: NodeJS.Timeout | null = null;
  closingTimer: NodeJS.Timeout | null = null;
  connectingXPromise?: XPromise;

  heartbeat = new Heartbeat({ wsContoller: this });
  events: EventsCollect = new EventsCollect(['message', 'log'])

  constructor({ wsOptions, heartbeatOptions }: { wsOptions: WsConfig, heartbeatOptions: HeartbeatConfig }) {
    this.options = merge(this.options, wsOptions)
    this.heartbeat.setOptions(heartbeatOptions)
  }

  setOptions(options: { wsOptions: WsConfig, heartbeatOptions?: HeartbeatConfig }) {
    this.options = merge(this.options, options)
  }

  _setSocketInstance(address: string) {
    const that = this;
    // @ts-ignore
    wsInstance = new WebSocket(address);

    // onopen
    wsInstance.onopen = function (ev: any) {
      if (that.connectStatus == SocketStatus.connecting) {
        that.connectStatus = SocketStatus.connected;
        const message = 'Websocket start success.'
        that.connectingCb?.resovle?.({ success: true, message });
        that.events.dispatchEvent('log', message)
        that._clearConnect();

        that.options.onOpened?.(that);
        // start heartbeat;
        // const [send]
        setTimeout(() => {
          that.heartbeat.send();
        }, 1000);
      }
    };

    // onclose
    wsInstance.onclose = function (ev: any) {
      if (that.connectStatus == SocketStatus.closing) {
        that.connectStatus = SocketStatus.closed;
        const message = 'Websocket closed success'
        that.closingCb?.resovle?.({ success: true, message });
        that.events.dispatchEvent('log', message)
        that._clearClose();
      }
    }

    // onerror
    wsInstance.onerror = function (ev: any) {
      if (that.connectStatus == SocketStatus.connecting) {
        that.connectStatus = SocketStatus.closed;
        const message = 'Websocket start error'
        that.connectingCb?.reject?.({ success: false, message });
        that.events.dispatchEvent('log', message)
        that._clearConnect();
      } else if (that.connectStatus == SocketStatus.closing) {
        that.connectStatus = SocketStatus.connecting;
        that.closingCb?.reject?.({ success: false, message: `关闭失败: onerror:${ev}` });
        that._clearClose();
      }
    }

    // onmessage
    wsInstance.onmessage = function (ev: MessageEvent) {
      that.heartbeat.received(ev);
      if (that.pause) {
        return;
      }

      that.events.dispatchEvent('message', ev)
    }
  }

  async _wsConnect(
    options?: {
      address?: string;
      connectTimeout?: number;
    }
  ): Promise<Object> {
    return new Promise<any>((resovle, reject) => {
      let connectConfig = merge(this.options, options ?? {}) as WsConfig

      if (this.connectStatus == SocketStatus.connected) {
        const message = 'Websocket already connected'
        this.events.dispatchEvent('log', message)
        return resovle({ success: true, message })
      }

      if (this.connectStatus !== SocketStatus.closed) {
        const message = `Websocket connect failed: connectStatus current is ${this.connectStatus} not closed`
        this.events.dispatchEvent('log', message)
        return reject({ success: false, message })
      }

      this.connectingCb.resovle = resovle;
      this.connectingCb.reject = reject;

      // set socket instance
      this.connectStatus = SocketStatus.connecting;
      this._setSocketInstance(connectConfig.address);

      // connecting out of time;
      this.connectingTimer = setTimeout(() => {
        this.connectStatus = SocketStatus.closed;
        wsInstance?.close();
        const message = `Websocket connect timeout`
        this.events.dispatchEvent('log', message)
        reject({ success: false, message });
        this._clearConnect();
      }, connectConfig.connectTimeout);
    })
  }

  _reExecute<T>({ cb, retryCount, intervalTime }: { cb: (params?: any) => Promise<any>, retryCount: number, intervalTime?: number, }): XPromise<T> {
    const cancel = () => {
      retryCount = 0;
    }

    return new XPromise<T>(async (resolve, reject) => {
      const retry = async () => {
        try {
          const res = await cb();
          resolve(res)
        } catch (error) {
          const message = `Websocket re-execute on ${retryCount}`
          this.events.dispatchEvent('log', message)
          if (retryCount !== 0) {
            if (retryCount > 0) {
              retryCount--;
            }
            setTimeout(() => {
              retry();
            }, intervalTime);
          } else if (retryCount == 0) {
            const message = `Websocket re-execute end`
            this.events.dispatchEvent('log', message)
            return reject(error);
          }
        }
      };
      retry();
    }, cancel);
  }

  _clearConnect() {
    this.connectingCb.resovle = null;
    this.connectingCb.reject = null;
    if (this.connectingTimer) {
      clearTimeout(this.connectingTimer);
      this.connectingTimer = null;
    }
  }

  async _wsClose(): Promise<Object> {
    return new Promise((resovle, reject) => {
      if (this.connectStatus == SocketStatus.closed) {
        const message = `Websocket already closed`
        this.events.dispatchEvent('log', message)
        return resovle({ success: true, message })
      }
      if (this.connectStatus !== SocketStatus.connected) {
        const message = `Websocket close filed: connectStatus current is ${this.connectStatus} not in connected.`
        this.events.dispatchEvent('log', message)
        return reject({ success: false, message })
      }
      this.closingCb.resovle = resovle;
      this.closingCb.reject = reject;

      // set socket instance
      this.connectStatus = SocketStatus.closing;
      wsInstance?.close();

      // connecting out of time;
      this.closingTimer = setTimeout(() => {
        this.connectStatus = SocketStatus.closed;
        const message = `Websocket close were timeout so it forced shutdown`
        this.events.dispatchEvent('log', message)
        resovle({ success: true, message });
        this._clearClose()
      }, 2000);
    })
  }


  _clearClose() {
    this.closingCb.resovle = null;
    this.closingCb.reject = null;
    if (this.closingTimer) {
      clearTimeout(this.closingTimer);
      this.closingTimer = null;
    }
  }

  /**
   * Start connect websocket
   */
  connect(
    options?: {
      address?: string;
      connectTimeout?: number;
    }
  ): XPromise<Object> {
    this.connectingXPromise = this._reExecute<Object>({ cb: () => this._wsConnect(options), retryCount: 10, intervalTime: 2000 });
    return this.connectingXPromise;
  }

  /**
   * Close websocket
   */
  async close() {
    this.connectingXPromise?.cancel();
    this.heartbeat.clear();
    await this._wsClose();
  }

  /**
   * Send msg
   * @param {string} msg - The event name.
   */
  send(msg: string) {
    if (this.connectStatus !== SocketStatus.connected) {
      const message = `Websocket send error: connectStatus not in connected status.`
      this.events.dispatchEvent('log', message)
      throw new Error(message);
    }
    wsInstance?.send(msg)
  }

  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(eventName: 'message' | 'log', fun: (e: any) => void) {
    this.events.addEventListener(eventName, fun)
  }

  /**
   * remove a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  removeEventListener(eventName: 'message' | 'log', fun: (e: any) => void) {
    this.events.removeEventListener(eventName, fun)
  }
}