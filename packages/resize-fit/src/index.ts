export class ResizeFit {
  container: HTMLElement;
  target: HTMLElement;
  mode: string;
  childElement: { width: number, height: number } = {
    width: 0,
    height: 0
  }

  resizeObserver = new ResizeObserver((items) => {
    items.forEach((item) => {
      let { offsetWidth: fatherWidth, offsetHeight: fatherHeight } = this.container;
      let { width: childWidth, height: childHeight } = this.childElement;

      let scale = 0;
      let moveX = 0;
      let moveY = 0;

      switch (this.mode) {
        case 'fill':
          let skewX = fatherWidth / childWidth;
          let skewY = fatherHeight / childHeight;
          this.target.style.transform = `matrix(${skewX}, 0, 0, ${skewY}, 0, 0)`;
          break;
        case 'contain':
          let fatherRate = fatherWidth / fatherHeight;
          let childRate = childWidth / childHeight;
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
          scale = fatherWidth / this.childElement.width;
          // moveY = Math.abs(fatherHeight - childHeight * scale) / 2;
          this.target.style.transform = `matrix(1, 0, 0, 1, ${moveX}, ${moveY}) scale(${scale})`;
          break;
        case 'fitWidthExtendHeight':
          scale = fatherWidth / this.childElement.width;
          // moveY = Math.abs(fatherHeight - childHeight * scale) / 2;
          this.target.style.transform = `matrix(1, 0, 0, 1, ${moveX}, ${moveY}) scale(${scale})`;
          this.target.style.height = `${fatherHeight / scale}px`
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
    mode?: "fill" | "contain" | "fitHeight" | "fitWidth" | "fitWidthExtendHeight";
  }) {
    // set container;
    this.container = container;
    this.container.style.position = 'relative';

    // set target;
    this.target = target;
    let { offsetWidth: childWidth, offsetHeight: childHeight } = target;
    this.childElement.width = childWidth;
    this.childElement.height = childHeight;
    this.target.style.position = 'absolute';
    this.target.style.transformOrigin = "0 0";

    // set mode
    this.mode = mode;

    // observe ;
    this.resizeObserver.observe(container);
  }

  dispose() {
    this.resizeObserver.unobserve(this.container)
  }
}
