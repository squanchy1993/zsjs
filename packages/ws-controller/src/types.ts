

// can't use async await it will change xpromise to promise;
export class XPromise<T> extends Promise<T> {
  resolve?: Function;
  reject?: Function;
  cancelPromise?: Function;
  constructor(fun: (resovle: Function, reject: Function) => {}, cancelPromise: Function) {
    let rs, rj;
    super((resolve: Function, reject: Function) => {
      fun(resolve, reject)
      rs = resolve;
      rj = reject;
    })
    this.resolve = rs;
    this.reject = rj;
    this.cancelPromise = cancelPromise;
  };

  cancel() {
    this.reject?.('promise has been canceled');
    this.cancelPromise?.();
  }
}

export enum SocketStatus {
  closed = "closed",
  connecting = "connecting",
  connected = "connected",
  closing = "closing",
}

export interface promiseCb {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resovle: null | ((params: any) => void),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject: null | ((params: any) => void),
}

export interface HeartbeatConfig {
  handleHeartbeatMsg?: (msg: any) => boolean,
  timeout?: number,
  intervalTime?: number,
  sendMsg?: string
}


export interface WsConfig {
  address?: string;
  connectTimeout?: number;
  reconnectIntervalTime?: number;
  retry?: number | null;
  heartBeatConfig?: HeartbeatConfig
  onOpened?: Function
}

export interface WsConfigStrict {
  address: string;
  connectTimeout: number;
  reconnectIntervalTime: number;
  retry: number;
  heartBeatConfig?: HeartbeatConfig
  onOpened?: Function
}