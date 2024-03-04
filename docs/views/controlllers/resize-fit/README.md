---
title: resize-fit
group: controllers
subGroup: general
---

## Instruction

This ResizeFit was designed to fit the upper container of a div, similar to the fit attribute of an image element.

## Demos

### fill

<Demo src="./demo/fill.tsx" />
[resize-fit's demo](https://www.zsjs.fun/views/controlllers/resize-fit#fill)

### contain

<Demo src="./demo/contain.tsx" />
[resize-fit's demo](https://www.zsjs.fun/views/controlllers/resize-fit#contain)

### fitHeight

<Demo src="./demo/fitHeight.tsx" />
[resize-fit's demo](https://www.zsjs.fun/views/controlllers/resize-fit#fitHeight)

### fitWidth

<Demo src="./demo/fitWidth.tsx" />
[resize-fit's demo](https://www.zsjs.fun/views/controlllers/resize-fit#fitWidth)


### fitWidthExtendHeight

<Demo src="./demo/fitWidthExtendHeight.tsx" />
[resize-fit's demo](https://www.zsjs.fun/views/controlllers/resize-fit#fitWidth)

## install

`npm install @zsjs/resize-fit;`

## Example

`import { ResizeFit } from "@zsjs/resize-fit";`

```html
<div id="father" style="width: 400px;height: 300px;border: 1px solid green;">
  <div id="child" style="width: 100px;height: 200px;background-color: red;">
    <span style="font-size: 58px;">ResizeFit</span>
  </div>
</div>
```

```ts
const resizeFit = new ResizeFit({
  container: document.getElementById("father"),
  target: document.getElementById("child"),
  mode: "contain", // contain
});

// before unmount
resizeFit.dispose();
```

## Methods

### dispose

> Remove the listener of ResizeObserver.

#### example

`resizeFit.dispose();`
