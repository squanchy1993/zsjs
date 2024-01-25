/// <reference types="node" />
import { HeartbeatConfig } from "./types";
import { WsController } from "./wsController";
export declare class Heartbeat {
    wsController: WsController;
    sendTimer?: NodeJS.Timeout;
    reSendTimer?: NodeJS.Timeout;
    connectingXPromise: {
        promise: Promise<any>;
        cancel: Function;
    } | null;
    startTime: number;
    options: HeartbeatConfig;
    constructor({ wsController, options, }: {
        wsController: WsController;
        options?: HeartbeatConfig;
    });
    setOptions(options?: HeartbeatConfig): void;
    send(): void;
    received(msg: MessageEvent): void;
    clear(): void;
}
//# sourceMappingURL=Heartbeat.d.ts.map