/// <reference types="node" />
import { HeartbeatConfig } from "./types";
import { WsContoller } from "./wsController";
export declare class Heartbeat {
    wsContoller: WsContoller;
    sendTimer: null | NodeJS.Timeout;
    reSendTimer: null | NodeJS.Timeout;
    connectingXPromise: {
        promise: Promise<any>;
        cancel: Function;
    } | null;
    startTime: number;
    options: HeartbeatConfig;
    constructor({ wsContoller, options, }: {
        wsContoller: WsContoller;
        options?: HeartbeatConfig;
    });
    setOptions(options?: HeartbeatConfig): void;
    send(): void;
    received(msg: MessageEvent): void;
    clear(): void;
}
//# sourceMappingURL=Heartbeat.d.ts.map