class y {
  constructor({
    container: l,
    target: c,
    mode: o = "fill"
  }) {
    this.childElement = {
      width: 0,
      height: 0
    }, this.resizeObserver = new ResizeObserver((f) => {
      f.forEach((w) => {
        let { offsetWidth: e, offsetHeight: i } = this.container, { width: a, height: s } = this.childElement, t = 0, h = 0, r = 0;
        switch (this.mode) {
          case "fill":
            let m = e / a, g = i / s;
            this.target.style.transform = `matrix(${m}, 0, 0, ${g}, 0, 0)`;
            break;
          case "contain":
            let $ = e / i, b = a / s;
            $ < b ? (t = e / a, r = Math.abs(i - s * t) / 2) : (t = i / s, h = Math.abs(e - a * t) / 2), this.target.style.transform = `matrix(1, 0, 0, 1, ${h}, ${r}) scale(${t})`;
            break;
          case "fitWidth":
            t = e / this.childElement.width, this.target.style.transform = `matrix(1, 0, 0, 1, ${h}, ${r}) scale(${t})`;
            break;
          case "fitWidthExtendHeight":
            t = e / this.childElement.width, this.target.style.transform = `matrix(1, 0, 0, 1, ${h}, ${r}) scale(${t})`, this.target.style.height = `${i / t}px`;
            break;
          case "fitHeight":
            t = i / s, this.target.style.transform = `matrix(1, 0, 0, 1, ${h}, ${r}) scale(${t})`;
            break;
        }
      });
    }), this.container = l, this.container.style.position = "relative", this.target = c;
    let { offsetWidth: d, offsetHeight: n } = c;
    this.childElement.width = d, this.childElement.height = n, this.target.style.position = "absolute", this.target.style.transformOrigin = "0 0", this.mode = o, this.resizeObserver.observe(l);
  }
  dispose() {
    this.resizeObserver.unobserve(this.container);
  }
}
export {
  y as ResizeFit
};
