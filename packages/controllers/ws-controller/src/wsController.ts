/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export enum SocketStatus {
  closed = "closed",
  connecting = "connecting",
  connected = "connected",
  closing = "closing",
}

interface promiseCb {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resovle: null | ((params: any) => void),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject: null | ((params: any) => void),
}

interface HeartBeatConfig {
  handleHeartBeatMsg?: (msg: any) => boolean,
  timeout?: number,
  intervalTime?: number,
  sendMsg?: string
}

export class WsContoller {
  address: string = '';
  connectTimeout: number = 5000;
  wsInstance: WebSocket | null = null;
  connectStatus: SocketStatus = SocketStatus.closed;
  connectingCb: promiseCb = {
    resovle: null,
    reject: null,
  };
  closingCb: promiseCb = {
    resovle: null,
    reject: null,
  };

  pause: boolean = false;
  connectingTimer: NodeJS.Timeout | null = null;
  closingTimer: NodeJS.Timeout | null = null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heartBeat = {
    handleHeartBeatMsg: (msg: any) => true,
    timeout: 5000,
    intervalTime: 8000,
    sendMsg: '---- heartbeat ----'
  }

  constructor(params: {
    heartBeatConfig?: HeartBeatConfig
  }) {
    if (params.heartBeatConfig) {

      if (params.heartBeatConfig.handleHeartBeatMsg) {
        this.heartBeat.handleHeartBeatMsg = params?.heartBeatConfig?.handleHeartBeatMsg;
      }

      if (params.heartBeatConfig.timeout) {
        this.heartBeat.timeout = params.heartBeatConfig.timeout;
      }

      if (params.heartBeatConfig.intervalTime) {
        this.heartBeat.intervalTime = params.heartBeatConfig.intervalTime;
      }

      if (params.heartBeatConfig.sendMsg) {
        this.heartBeat.sendMsg = params.heartBeatConfig.sendMsg;
      }
    }

  }

  _setSocketInstance(address: string) {
    // @ts-ignore
    this.wsInstance = new WebSocket(address);

    // onopen
    this.wsInstance.onopen = (ev: any) => {
      console.warn('onopen>>>', this.connectStatus, ev)
      if (this.connectStatus == SocketStatus.connecting) {
        this.connectStatus = SocketStatus.connected;
        this.connectingCb?.resovle?.({ success: true, message: '连接成功' });
        this._clearConnect();

        // start heartbeat;
        this._heartBeat.send();
      }
    };

    // onclose
    this.wsInstance.onclose = (ev: any) => {
      console.warn('onclose>>>', this.connectStatus, ev)
      if (this.connectStatus == SocketStatus.closing) {
        this.connectStatus = SocketStatus.closed;
        this.closingCb?.resovle?.({ success: true, message: `关闭成功 :${ev}` });

        this._clearClose();
      }
    }

    // onerror
    this.wsInstance.onerror = (ev: any) => {
      console.warn('onerror>>>', this.connectStatus, ev)
      if (this.connectStatus == SocketStatus.connecting) {
        this.connectStatus = SocketStatus.closed;
        this.connectingCb?.reject?.({ success: false, message: `开启失败 onerror:${ev}` });

        this._clearConnect();
      } else if (this.connectStatus == SocketStatus.closing) {
        this.connectStatus = SocketStatus.connecting;
        this.closingCb?.reject?.({ success: false, message: `关闭失败: onerror:${ev}` });

        this._clearClose();
      }
    }

    // onmessage
    this.wsInstance.onmessage = (ev: any) => {
      console.warn('onmessage>>>', this.connectStatus, ev)
      this._heartBeat.received(ev);

      if (this.pause) {
        return;
      }
    }
  }

  _clearClose() {
    this.closingCb.resovle = null;
    this.closingCb.reject = null;
    if (this.closingTimer) {
      clearTimeout(this.closingTimer);
      this.closingTimer = null;
    }
  }
  _clearConnect() {
    this.connectingCb.resovle = null;
    this.connectingCb.reject = null;
    if (this.connectingTimer) {
      clearTimeout(this.connectingTimer);
      this.connectingTimer = null;
    }
  }

  _heartBeat = (() => {
    let timeoutTimer: null | NodeJS.Timeout = null;
    const send = () => {
      this.wsInstance?.send(this.heartBeat.sendMsg);
      timeoutTimer && clearTimeout(timeoutTimer);
      timeoutTimer = setTimeout(async () => {
        await this.close();
        await this.connect(this.address, this.connectTimeout);
      }, this.heartBeat.timeout)
    };


    let sendTimer: null | NodeJS.Timeout = null;
    const received = (msg: any) => {
      const isHeartBeatMsg = this.heartBeat.handleHeartBeatMsg(msg);
      if (!isHeartBeatMsg || sendTimer) return;
      sendTimer = setTimeout(() => {
        console.log('发送 心跳')
        send()
        sendTimer && clearTimeout(sendTimer);
        sendTimer = null;
      }, this.heartBeat.intervalTime)
    }
    return {
      send,
      received
    }
  })();


  async connect(address: string, connectTimeout: number = 20000): Promise<void> {
    return new Promise((resovle, reject) => {
      if (this.connectStatus !== SocketStatus.closed) {
        return reject({ success: false, message: `eval connect failed: ${this.connectStatus}` })
      }

      this.address = address;
      this.connectTimeout = connectTimeout;
      this.connectingCb.resovle = resovle;
      this.connectingCb.reject = reject;

      // set socket instance
      this.connectStatus = SocketStatus.connecting;
      this._setSocketInstance(address);

      // connecting out of time;
      this.connectingTimer = setTimeout(() => {
        this.connectStatus = SocketStatus.closed;
        this.wsInstance?.close();
        reject({ success: false, message: '连接超时' });
        this._clearConnect();
      }, connectTimeout);
    })
  }

  async close(): Promise<void> {
    return new Promise((resovle, reject) => {
      if (this.connectStatus !== SocketStatus.connected) {
        return reject({ success: false, message: `eval close() failed: ${this.connectStatus}` })
      }
      this.closingCb.resovle = resovle;
      this.closingCb.reject = reject;

      // set socket instance
      this.connectStatus = SocketStatus.closing;
      this.wsInstance?.close();

      // connecting out of time;
      this.closingTimer = setTimeout(() => {
        this.connectStatus = SocketStatus.closed;
        reject({ success: false, message: '关闭超时,强行关闭' });
        this._clearClose()
      }, 2000);
    })
  }
}