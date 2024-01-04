import * as React from "react";
import styled from "styled-components";
import { useReactive } from "@zs-ui/hooks";
import { WsContoller } from "@zs-ui/ws-controllers";

// component
import WsConfig from "./component/wsConfig";
import WsStatus from "./component/wsStatus";
import IntervalSend from "./component/intervalSend";
import TemporarySend from "./component/temporarySend";
import MessageRecords from "./component/messageRecords";
import ConsoleLog from './component/consoleLog'
import { WsControllerContextProvider } from "./component/socketProvider";

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

function App() {
  const wsContoller = useReactive(new WsContoller({
    wsOptions: {
      address: 'ws://124.222.224.186:8800',
      onOpened: (wsCtl: WsContoller) => {
        wsCtl.send('你好 服务器')
      }
    },
    heartbeatOptions: {
      handleHeartbeatMsg: (msg) => {
        return msg.data.includes('---- heartbeat ----');
      },
      sendMsg: '---- heartbeat ----',
    },
  }))

  const MessageRecordsRef = React.useRef()

  const setMessage = (msg: string) => {
    MessageRecordsRef.current?.addTomessageRecord(msg)
  }

  return (
    <WsControllerContextProvider wsContoller={wsContoller}>
      <Container>
        <section className="header"></section>
        <section className="body">
          <div className="body-inner">
            <div className="left">
              <WsStatus />
              <WsConfig />
              <IntervalSend setMessage={setMessage} />
              <TemporarySend setMessage={setMessage} />
              <ConsoleLog />
            </div>
            <div className="right">
              <MessageRecords ref={MessageRecordsRef} />
            </div>
          </div>
        </section>
      </Container>
    </WsControllerContextProvider>
  );
}

export default App;
