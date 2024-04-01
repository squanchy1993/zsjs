export declare function cancelablePromise<T>(originPromise: Promise<T>, timeout?: number): {
    promise: Promise<unknown>;
    abort: (msg: string) => void;
};
//# sourceMappingURL=cancelablePromise.d.ts.map