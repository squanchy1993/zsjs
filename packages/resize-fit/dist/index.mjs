class v {
  constructor({
    container: l,
    target: o,
    mode: f = "fill"
  }) {
    this.resizeObserver = new ResizeObserver((c) => {
      c.forEach(($) => {
        let { offsetWidth: e, offsetHeight: s } = this.container, { offsetWidth: i, offsetHeight: r } = this.target, n = s / r, m = e / i;
        this.target.style.transformOrigin = "0 0";
        let t = 0, a = 0, h = 0, g = e / s, b = i / r;
        switch (this.mode) {
          case "fill":
            this.target.style.transform = `matrix(${m}, 0, 0, ${n}, 0, 0)`;
            break;
          case "contain":
            g < b ? (t = e / i, h = Math.abs(s - r * t) / 2) : (t = s / r, a = Math.abs(e - i * t) / 2), this.target.style.transform = `matrix(1, 0, 0, 1, ${a}, ${h}) scale(${t})`;
            break;
          case "fitWidth":
            t = e / i, this.target.style.transform = `matrix(1, 0, 0, 1, ${a}, ${h}) scale(${t})`;
            break;
          case "fitHeight":
            t = s / r, this.target.style.transform = `matrix(1, 0, 0, 1, ${a}, ${h}) scale(${t})`;
            break;
        }
      });
    }), this.resizeObserver.observe(l), this.container = l, this.target = o, this.mode = f;
  }
  dispose() {
    this.resizeObserver.unobserve(this.container);
  }
}
export {
  v as ResizeFit
};
