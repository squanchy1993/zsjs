/*
 * @Date: 2023-12-03 12:31:31
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2023-12-06 18:49:34
 * @FilePath: \websocket-tool\src\App.tsx
 */
import { useState } from "react";
import styled from "styled-components";
import WsConfig from "./component/wsConfig";
import WsStatus from "./component/wsStatus";
import IntervalSend from "./component/intervalSend";
import TemporarySend from "./component/temporarySend";
import ConsoleLog from "./component/consoleLog";
import MessageRecords from "./component/messageRecords";
import React from "react";
import { WsContoller } from "@zs-ui/controllers";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .header {
    width: inherit;
    height: 60px;
    background-color: #007bff;
  }
  & > .body {
    width: inherit;
    flex: 1;
    .body-inner {
      height: calc(100% - 20px);
      width: 100%;
      margin: 10px 0%;
      display: flex;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 5px;
      .left,
      .right {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
      }
      .left {
        width: 40%;
      }
      .right {
        width: 60%;
      }
    }
  }
`;
const socket = new WsContoller({
  heartBeatConfig: {
    handleHeartBeatMsg: (msg) => {
      console.log("msg>>>", msg);
      return true;
    },
  },
});
socket.connect("ws://124.222.224.186:8800");
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Container>
        <section className="header"></section>
        <section className="body">
          <div className="body-inner">
            <div className="left">
              <WsStatus />
              <WsConfig />
              <IntervalSend />
              <TemporarySend />
              <ConsoleLog />
            </div>
            <div className="right">
              <MessageRecords />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default App;
