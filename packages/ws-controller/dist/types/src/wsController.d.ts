/// <reference types="node" />
import { SocketStatus, promiseCb, HeartbeatConfig, WsConfig, WsConfigStrict } from "./types";
import EventsCollect from "./EventsCollect";
import { Heartbeat } from "./Heartbeat";
export declare class WsController {
    options: WsConfigStrict;
    _connectStatus: SocketStatus;
    get connectStatus(): SocketStatus;
    set connectStatus(status: SocketStatus);
    closingCb: promiseCb;
    pause: boolean;
    connectingTimer: NodeJS.Timeout | null;
    heartbeat: Heartbeat;
    events: EventsCollect;
    socketConnect?: {
        promise: Promise<any>;
        cancel: Function;
    };
    constructor(options: {
        wsOptions?: WsConfig;
        heartbeatOptions?: HeartbeatConfig;
    });
    setOptions({ wsOptions, heartbeatOptions, }: {
        wsOptions?: WsConfig;
        heartbeatOptions?: HeartbeatConfig;
    }): void;
    _startWsConnect(address: string, retryCount?: number, intervalTime?: number): {
        promise: Promise<Object>;
        cancel: Function;
    };
    connect(options?: {
        address?: string;
        connectTimeout?: number;
    }, retryCount?: number, intervalTime?: number): Promise<Object>;
    closingTimer: NodeJS.Timeout | undefined;
    _wsClose(): Promise<{
        message: string;
        success: boolean;
    }>;
    /**
     * Close websocket
     */
    close(): Promise<unknown>;
    /**
     * Send msg
     * @param {string} msg - The event name.
     */
    send(msg: string): void;
    /**
     * Add a callback function
     * @param {string} eventName - The event name.
     * @param {function} fun - The callback function.
     */
    addEventListener<T>(eventName: "message" | "log" | "status", fun: (e: T) => void): void;
    /**
     * remove a callback function
     * @param {string} eventName - The event name.
     * @param {function} fun - The callback function.
     */
    removeEventListener(eventName: "message" | "log" | "status", fun: Function): void;
}
//# sourceMappingURL=wsController.d.ts.map