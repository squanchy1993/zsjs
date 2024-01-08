/// <reference types="node" />
import { XPromise, SocketStatus, promiseCb, HeartbeatConfig, WsConfig } from "./types";
import EventsCollect from "./EventsCollect";
import { Heartbeat } from "./Heartbeat";
export declare class WsContoller {
    options: WsConfig;
    _connectStatus: SocketStatus;
    get connectStatus(): SocketStatus;
    set connectStatus(status: SocketStatus);
    connectingCb: promiseCb;
    closingCb: promiseCb;
    pause: boolean;
    connectingTimer: NodeJS.Timeout | null;
    closingTimer: NodeJS.Timeout | null;
    connectingXPromise?: XPromise<Object>;
    heartbeat: Heartbeat;
    events: EventsCollect;
    constructor(options: {
        wsOptions?: WsConfig;
        heartbeatOptions?: HeartbeatConfig;
    });
    setOptions({ wsOptions, heartbeatOptions }: {
        wsOptions?: WsConfig;
        heartbeatOptions?: HeartbeatConfig;
    }): void;
    _setSocketInstance(address: string): void;
    _wsConnect(options?: {
        address?: string;
        connectTimeout?: number;
    }): Promise<Object>;
    _reExecute<T>({ cb, retryCount, intervalTime }: {
        cb: (params?: any) => Promise<any>;
        retryCount: number;
        intervalTime?: number;
    }): XPromise<T>;
    _clearConnect(): void;
    _wsClose(): Promise<Object>;
    _clearClose(): void;
    /**
     * Start connect websocket
     */
    connect(options?: {
        address?: string;
        connectTimeout?: number;
    }): XPromise<Object>;
    /**
     * Close websocket
     */
    close(): Promise<void>;
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
    addEventListener<T>(eventName: 'message' | 'log' | 'status', fun: (e: T) => void): void;
    /**
     * remove a callback function
     * @param {string} eventName - The event name.
     * @param {function} fun - The callback function.
     */
    removeEventListener(eventName: 'message' | 'log' | 'status', fun: Function): void;
}
//# sourceMappingURL=wsController.d.ts.map