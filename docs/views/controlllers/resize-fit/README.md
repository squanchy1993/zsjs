---
title: resize-fit
group: controllers
subGroup: general
---

## Instruction

This ResizeFit was designed to fit the upper container of a div, similar to the fit attribute of an image element.

## Demos

<Demo src="./demo/index.tsx" />

## Installing

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
  mode: "cover", // contain
});

// before unmount
resizeFit.dispose();
```

## Methods

### dispose

> Remove the listener of ResizeObserver.

#### example

`resizeFit.dispose();`
