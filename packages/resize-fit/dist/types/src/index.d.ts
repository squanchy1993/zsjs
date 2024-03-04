export declare class ResizeFit {
    container: HTMLElement;
    target: HTMLElement;
    mode: string;
    childElement: {
        width: number;
        height: number;
    };
    resizeObserver: ResizeObserver;
    constructor({ container, target, mode, }: {
        container: HTMLElement;
        target: HTMLElement;
        mode?: "fill" | "contain" | "fitHeight" | "fitWidth" | "fitWidthExtendHeight";
    });
    dispose(): void;
}
//# sourceMappingURL=index.d.ts.map