---
title: zs-message
group: components
subGroup: general
---

## Instruction

This component was designed for displaying message prompts.

## Installing

`npm install @zsjs/mui-components;`

## Example

```tsx
import { ZsMessage } from "@zsjs/mui-components";

export default function ZsMessageDemo() {
  return (
    <Button
      onClick={() => ZsMessage.success({ content: "Success", duration: 1000 })}
      variant="contained"
      color="success"
    >
      Success
    </Button>
  );
}
```

## Methods

### success, info, waring, error

> 

#### params

- content: string;
- duration?: number;

#### example

<Demo src="./demo.tsx" />
[ZsMessage'demo](https://www.zsjs.fun/views/components/zs-messager)

### renderMessage

> This function made for complex content.

#### params

- content: React.ReactNode;
- duration?: number;
- type: success | info | warning | error

#### example

<Demo src="./render-message-demo.tsx" />
[ZsMessage'demo](https://www.zsjs.fun/examples/controlllers/ws-controller)
