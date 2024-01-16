export declare class ResizeFit {
    container: HTMLElement;
    target: HTMLElement;
    mode: string;
    resizeObserver: ResizeObserver;
    constructor({ container, target, mode, }: {
        container: HTMLElement;
        target: HTMLElement;
        mode?: "cover" | "contain";
    });
    dispose(): void;
}
//# sourceMappingURL=index.d.ts.map