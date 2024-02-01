export declare class ResizeFit {
    container: HTMLElement;
    target: HTMLElement;
    mode: string;
    resizeObserver: ResizeObserver;
    constructor({ container, target, mode, }: {
        container: HTMLElement;
        target: HTMLElement;
        mode?: "fill" | "contain" | "fitHeight" | "fitWidth";
    });
    dispose(): void;
}
//# sourceMappingURL=index.d.ts.map