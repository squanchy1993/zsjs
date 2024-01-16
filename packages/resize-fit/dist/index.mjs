class z {
  constructor({
    container: h,
    target: l,
    mode: f = "cover"
  }) {
    this.resizeObserver = new ResizeObserver((c) => {
      c.forEach((b) => {
        let { offsetWidth: t, offsetHeight: s } = this.container, { offsetWidth: i, offsetHeight: r } = this.target, n = s / r, d = t / i;
        if (this.target.style.transformOrigin = "0 0", this.mode == "cover")
          this.target.style.transform = `matrix(${d}, 0, 0, ${n}, 0, 0)`;
        else if (this.mode == "contain") {
          let e = 0, a = 0, o = 0, m = t / s, g = i / r;
          m < g ? (e = t / i, o = Math.abs(s - r * e) / 2) : (e = s / r, a = Math.abs(t - i * e) / 2), this.target.style.transform = `matrix(1, 0, 0, 1, ${a}, ${o}) scale(${e})`;
        }
      });
    }), this.resizeObserver.observe(h), this.container = h, this.target = l, this.mode = f;
  }
  dispose() {
    this.resizeObserver.unobserve(this.container);
  }
}
export {
  z as ResizeFit
};
