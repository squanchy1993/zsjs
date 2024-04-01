export declare function loopFunc(func: () => Promise<any>, time?: number): {
    start: () => void;
    stop: () => boolean;
    refresh: () => Promise<void>;
    setTime: (time: number) => void;
};
//# sourceMappingURL=loopFunc.d.ts.map