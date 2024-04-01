export declare function reExecute<T>({ cb, retryCount, intervalTime, event }: {
    cb: (params?: any) => Promise<any>;
    retryCount: number;
    intervalTime?: number;
    event: (message: string) => void;
}): {
    promise: Promise<T>;
    cancel: Function;
};
//# sourceMappingURL=reExecute.d.ts.map