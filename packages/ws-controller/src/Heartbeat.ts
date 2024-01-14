import merge from "ts-deepmerge";
import { HeartbeatConfig, SocketStatus, XPromise } from "./types";
import { WsContoller } from "./wsController";
import { reExecute } from "@zsjs/utils";

export class Heartbeat {
  wsContoller: WsContoller;
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
    wsContoller,
    options,
  }: {
    wsContoller: WsContoller;
    options?: HeartbeatConfig;
  }) {
    this.wsContoller = wsContoller;
    this.setOptions(options);
  }

  setOptions(options: HeartbeatConfig = {}) {
    this.options = merge(this.options, options);
  }

  send() {
    // console.log(`------ heartbeat check started, wite callback -----`);
    const message = `heartbeat send message: ${this.options.sendMsg}`;
    this.wsContoller.events.dispatchEvent("log", message);

    this.startTime = new Date().getTime();
    this.wsContoller.send(this.options.sendMsg as string);
    this.sendTimer && clearTimeout(this.sendTimer);
    this.sendTimer = setTimeout(async () => {
      // console.log('------ heartbeat check lost connection and restart connect -----')
      if (this.wsContoller.connectStatus == SocketStatus.connected) {
        await this.wsContoller._wsClose();
      }
      this.connectingXPromise = reExecute({
        cb: () => this.wsContoller._wsConnect({}),
        retryCount: -1,
        intervalTime: 2000,
        event: (message) =>
          this.wsContoller.events.dispatchEvent<string>("log", message),
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
    this.wsContoller.events.dispatchEvent("log", message);

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
    this.wsContoller.events.dispatchEvent("log", message);
  }
}
