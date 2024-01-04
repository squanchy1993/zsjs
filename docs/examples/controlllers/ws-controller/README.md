---
title: ws-controller title
group: controllers
subGroup: general
---
## Instruction

This controller was designed for WebSocket communication. It was sealed with some logic, such as connect timeout, reconnect, and so on.

## Demos

<Demo src="./demo/index.tsx" />

## Installing

`npm install @zs-ui/controllers;`

## Example

`import { WsContoller } from "@zs-ui/controllers";`

```ts
  // Generate a wsContoller instance.
  const wsContoller = new WsContoller({
    wsOptions: {
      address: 'ws://124.222.224.186:8800',  // connect address
      onOpened: (wsCtl: WsContoller) => {
        wsCtl.send('Hello world')  // when connect success will call OnOpened function.
      }
    },
    heartbeatOptions: {  // heartbeat setting.
      handleHeartbeatMsg: (msg) => {
        return msg.data.includes('---- heartbeat ----'); // Checkout if is a heartbeat message.
      },
      sendMsg: '---- heartbeat ----',
    },
  })

  // Use close and connect to control wsContoller.
  wsContoller.connect();  // start connect.
  wsContoller.close();   // close connect.

  // listen events
  const message = (msg) => {}
  /// Listen message
  wsController?.addEventListener("message", message);

  /// remove listener
  wsController?.removeEventListener("message", message);
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
const log = (msg) => {
  console.log(msg)
}
wsController?.addEventListener('log', logMessage)

// Add message listener
const message = (msg) => {
  console.log(msg)
}
wsController?.addEventListener('message', message)

// Remove the listener
wsController.removeEventListener('log', logMessage)
wsController.removeEventListener('message', message)
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
