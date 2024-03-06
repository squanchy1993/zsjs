class w {
  constructor({
    container: d,
    target: o,
    mode: n = "fill"
  }) {
    this.childElement = {
      width: 0,
      height: 0
    }, this.resizeObserver = new ResizeObserver((f) => {
      f.forEach((b) => {
        let { offsetWidth: e, offsetHeight: i } = this.container, t = 0, s = 0, h = 0;
        if (!this.childElement.width || !this.childElement.height) {
          let { offsetWidth: l, offsetHeight: c } = this.target;
          this.childElement.width = l, this.childElement.height = c;
        }
        let { width: a, height: r } = this.childElement;
        switch (this.mode) {
          case "fill":
            let l = e / a, c = i / r;
            this.target.style.transform = `matrix(${l}, 0, 0, ${c}, 0, 0)`;
            break;
          case "contain":
            let m = e / i, g = a / r;
            m < g ? (t = e / a, h = Math.abs(i - r * t) / 2) : (t = i / r, s = Math.abs(e - a * t) / 2), this.target.style.transform = `matrix(1, 0, 0, 1, ${s}, ${h}) scale(${t})`;
            break;
          case "fitWidth":
            t = e / this.childElement.width, this.target.style.transform = `matrix(1, 0, 0, 1, ${s}, ${h}) scale(${t})`;
            break;
          case "fitWidthExtendHeight":
            t = e / this.childElement.width, this.target.style.transform = `matrix(1, 0, 0, 1, ${s}, ${h}) scale(${t})`, this.target.style.height = `${i / t}px`;
            break;
          case "fitHeight":
            t = i / r, this.target.style.transform = `matrix(1, 0, 0, 1, ${s}, ${h}) scale(${t})`;
            break;
        }
      });
    }), this.container = d, this.container.style.position = "relative", this.target = o, this.target.style.position = "absolute", this.target.style.transformOrigin = "0 0", this.mode = n, this.resizeObserver.observe(d);
  }
  dispose() {
    this.resizeObserver.unobserve(this.container);
  }
}
export {
  w as ResizeFit
};
