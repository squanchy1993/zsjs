---
title: ws-controller
group: controllers
subGroup: general
---

## Instruction

This controller was designed for WebSocket communication. It was sealed with some logic, such as connect timeout, reconnect, and so on.

## Demos

<Demo src="./demo/index.tsx" />
[WsController'demo](https://www.zsjs.fun/views/controlllers/ws-controller)

## Installing

`npm install @zsjs/ws-controller;`

## Example

`import { WsController } from "@zsjs/ws-controller";`

```ts
// Create a wsController instance with options.
const wsController = new WsController({
  wsOptions: {
    address: "ws://xxx.xxx.xx.xx:8800", // connect address
    onOpened: (wsCtl: WsController) => {
      wsCtl.send("Hello world"); // when connect success will call OnOpened function.
    },
  },

  // The heartbeat check is successful when a message is sent to the server, and the 
  // server responds with a message in a timely manner. If the client does not receive 
  // a message or receives a timeout, it triggers the reconnect logic.
  heartbeatOptions: {
    // heartbeat setting.
    handleHeartbeatMsg: (msg) => {
      return msg.data.includes("---- heartbeat ----"); // Checkout if is a heartbeat message.
    },
    sendMsg: "---- heartbeat ----",
  },
});

// Or you can set address by setOPtions methods.
const wsController = new WsController({});
wsController.setOptions({ wsOptions: { address: "ws://xxx.xxx.xx.xx:8800" } });

// listen events
const message = (msg) => {};
/// Listen message
wsController?.addEventListener("message", message);

/// remove listener
wsController?.removeEventListener("message", message);

// Use close and connect to control wsController.
wsController.connect(); // start connect.
wsController.close(); // close connect.
```

## Methods

### setOptions

> Set the WsController instance config after you create.

#### params

`{ wsOptions: WsConfig, heartbeatOptions: HeartbeatConfig }`

#### example

`wsController?.setOptions({ wsOptions: { address: ws://xxx.xx.xxx.xx:xxxx }})`

### connect

> Start websocket communication

#### params

`{ address?: string; connectTimeout?: number;} or no params`

#### example

`wsController?.connect();`

### close

> Close the wsController

#### params

`no params`

#### example

`wsController?.connect();`

### Send

> Send mesage to the server

#### params

`msg: string`

#### example

`wsController.send('Hello world');`

### addEventListener && and removeEventListener

> Listen the message or log change.

#### params

`eventName: 'message' | 'log', fun: (e: any) => void`

#### example

```ts
// Add log listener
const logReceiver = (msg: string) => {
  console.log(msg);
};
wsController?.addEventListener<string>("log", logReceiver);

// Add message listener
const messageReceiver = (msg: MessageEvent) => {
  console.log(msg);
};
wsController?.addEventListener<MessageEvent>("message", messageReceiver);

// Add message listener
const statusReceiver = (msg: SocketStatus) => {
  console.log(msg);
};
wsController?.addEventListener<SocketStatus>("message", statusReceiver);

// Remove the listener before you leave.
wsController.removeEventListener("log", logReceiver);
wsController.removeEventListener("message", messageReceiver);
wsController.removeEventListener("status", statusReceiver);
```

## Configs

### wsConfig

```TS
 interface WsConfig {
  address: string;
  connectTimeout?: number;
  reconnectIntervalTime?: number;
  retry?: number | null;
  heartBeatConfig?: HeartbeatConfig
  onOpened?: Function
}
```

### HeartbeatConfig

```TS
 interface HeartbeatConfig {
  handleHeartbeatMsg?: (msg: any) => boolean,
  timeout?: number,
  intervalTime?: number,
  sendMsg?: string
}
```
