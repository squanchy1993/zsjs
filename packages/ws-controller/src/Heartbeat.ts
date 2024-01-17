import merge from "ts-deepmerge";
import { HeartbeatConfig, SocketStatus, XPromise } from "./types";
import { WsController } from "./wsController";
import { reExecute } from "@zsjs/utils";

export class Heartbeat {
  wsController: WsController;
  sendTimer: null | NodeJS.Timeout = null;
  reSendTimer: null | NodeJS.Timeout = null;
  connectingXPromise: { promise: Promise<any>; cancel: Function } | null = null;
  startTime: number = 0;

  options: HeartbeatConfig = {
    handleHeartbeatMsg: (msg: any) => true,
    timeout: 5000,
    intervalTime: 5000,
    sendMsg: "---- heartbeat ----",
  };

  constructor({
    wsController,
    options,
  }: {
    wsController: WsController;
    options?: HeartbeatConfig;
  }) {
    this.wsController = wsController;
    this.setOptions(options);
  }

  setOptions(options: HeartbeatConfig = {}) {
    this.options = merge(this.options, options);
  }

  send() {
    // console.log(`------ heartbeat check started, wite callback -----`);
    const message = `heartbeat send message: ${this.options.sendMsg}`;
    this.wsController.events.dispatchEvent("log", message);

    this.startTime = new Date().getTime();
    this.wsController.send(this.options.sendMsg as string);
    this.sendTimer && clearTimeout(this.sendTimer);
    this.sendTimer = setTimeout(async () => {
      // console.log('------ heartbeat check lost connection and restart connect -----')
      if (this.wsController.connectStatus == SocketStatus.connected) {
        await this.wsController._wsClose();
      }
      this.connectingXPromise = reExecute({
        cb: () => this.wsController._wsConnect({}),
        retryCount: -1,
        intervalTime: 2000,
        event: (message) =>
          this.wsController.events.dispatchEvent<string>("log", message),
      });
    }, this.options.timeout);
  }

  received(msg: MessageEvent) {
    // checkout is during the process of heartbeat；
    if (!this.sendTimer) return;

    // checkout is the heartbeat msg;
    const isHeartBeatMsg = this.options.handleHeartbeatMsg?.(msg);
    if (!isHeartBeatMsg) return;

    let endTime = new Date().getTime();
    const message = `heartbeat started at ${this.startTime
      }, completed in ${endTime}', duration is ${(endTime - this.startTime) / 1000
      } seconds`;
    this.wsController.events.dispatchEvent("log", message);

    this.startTime = 0;
    // console.log(`------ heartbeat check complete, ready to next check -----`);

    // clear sendTimer
    if (this.sendTimer) {
      clearTimeout(this.sendTimer);
      this.sendTimer = null;
    }

    if (!this.reSendTimer) {
      this.reSendTimer = setTimeout(() => {
        this.send();
        this.reSendTimer && clearTimeout(this.reSendTimer);
        this.reSendTimer = null;
      }, this.options.intervalTime);
    }
  }

  clear() {
    this.sendTimer && clearTimeout(this.sendTimer);
    this.sendTimer = null;
    this.reSendTimer && clearTimeout(this.reSendTimer);
    this.reSendTimer = null;
    this.connectingXPromise && this.connectingXPromise.cancel();
    // console.log(`------ heartbeat was cleared -----`);
    const message = `heartbeat was cleared out by user`;
    this.wsController.events.dispatchEvent("log", message);
  }
}
