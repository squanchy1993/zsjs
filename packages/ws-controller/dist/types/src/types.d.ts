export declare class XPromise<T> extends Promise<T> {
    resolve?: Function;
    reject?: Function;
    cancelPromise?: Function;
    constructor(fun: (resovle: Function, reject: Function) => {}, cancelPromise: Function);
    cancel(): void;
}
export declare enum SocketStatus {
    closed = "closed",
    connecting = "connecting",
    connected = "connected",
    closing = "closing"
}
export interface promiseCb {
    resovle: null | ((params: any) => void);
    reject: null | ((params: any) => void);
}
export interface HeartbeatConfig {
    handleHeartbeatMsg?: (msg: any) => boolean;
    timeout?: number;
    intervalTime?: number;
    sendMsg?: string;
}
export interface WsConfig {
    address: string;
    connectTimeout?: number;
    reconnectIntervalTime?: number;
    retry?: number | null;
    heartBeatConfig?: HeartbeatConfig;
    onOpened?: Function;
}
//# sourceMappingURL=types.d.ts.map