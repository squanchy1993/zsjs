export class ResizeFit {
  container: HTMLElement;
  target: HTMLElement;
  mode: string;

  resizeObserver = new ResizeObserver((items) => {
    items.forEach((item) => {
      let { offsetWidth: fatherWidth, offsetHeight: fatherHeight } =
        this.container;
      let { offsetWidth: childWidth, offsetHeight: childHeight } = this.target;

      let skewY = fatherHeight / childHeight;
      let skewX = fatherWidth / childWidth;

      this.target.style.transformOrigin = "0 0";

      let scale = 0;
      let moveX = 0;
      let moveY = 0;
      let fatherRate = fatherWidth / fatherHeight;
      let childRate = childWidth / childHeight;

      switch (this.mode) {
        case 'fill':
          this.target.style.transform = `matrix(${skewX}, 0, 0, ${skewY}, 0, 0)`;
          break;
        case 'contain':
          if (fatherRate < childRate) {
            scale = fatherWidth / childWidth;
            moveY = Math.abs(fatherHeight - childHeight * scale) / 2;
          } else {
            scale = fatherHeight / childHeight;
            moveX = Math.abs(fatherWidth - childWidth * scale) / 2;
          }
          this.target.style.transform = `matrix(1, 0, 0, 1, ${moveX}, ${moveY}) scale(${scale})`;
          break;
        case 'fitWidth':
          scale = fatherWidth / childWidth;
          // moveY = Math.abs(fatherHeight - childHeight * scale) / 2;
          this.target.style.transform = `matrix(1, 0, 0, 1, ${moveX}, ${moveY}) scale(${scale})`;
          break;
        case 'fitHeight':
          scale = fatherHeight / childHeight;
          // moveX = Math.abs(fatherWidth - childWidth * scale) / 2;
          this.target.style.transform = `matrix(1, 0, 0, 1, ${moveX}, ${moveY}) scale(${scale})`;
          break;
        default:
          break;
      }
    });
  });

  constructor({
    container,
    target,
    mode = "fill",
  }: {
    container: HTMLElement;
    target: HTMLElement;
    mode?: "fill" | "contain" | "fitHeight" | "fitWidth";
  }) {
    this.resizeObserver.observe(container);
    this.container = container;
    this.target = target;
    this.mode = mode;
  }

  dispose() {
    this.resizeObserver.unobserve(this.container)
  }
}
