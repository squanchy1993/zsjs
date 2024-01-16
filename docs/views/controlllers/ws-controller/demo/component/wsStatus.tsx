import styled from "styled-components";
import * as React from "react";
import CardItem from "./cardItem";
import { SocketStatus } from "@zsjs/ws-controller";
import WsControllerContext from "./socketProvider";
import classnames from "classnames";
import { useOnMount, useOnUnmount } from "@zsjs/hooks";

const Container = styled.div`
  width: 100%;
  height: 100px;
  .status-group {
    display: flex;
    height: 36px;
    align-items: center;
    justify-content: flex-start;
    .status {
      height: 32px;
      width: 32px;
      border-radius: 16px;
      margin-right: 20px;
      background-color: #5e5c5c;
    }
    .status--closed {
      background-color: #c32121;
    }
    .status--connected {
      background-color: #12b91f;
    }
    .status--processing {
      background-color: #ef8e15;
    }
    .text {
      margin-left: auto
    }
  }
`;

const WsStatus: React.FC = () => {
  const wsController = React.useContext(WsControllerContext);
  const [socketStatus, setSocketStatus] = React.useState(SocketStatus.closed)

  useOnMount(()=> {
    wsController?.addEventListener<SocketStatus>('status', statusChangeReceiver)
  })

  useOnUnmount(()=> {
    wsController?.removeEventListener('status', statusChangeReceiver)
  })

  const statusChangeReceiver = (status:SocketStatus )=> {
    setSocketStatus(status)
  }

  return (
    <Container>
      <CardItem title="connect state">
        <div className="status-group">
          <div className={classnames('status', { 'status--closed': socketStatus == SocketStatus.closed })}></div>
          <div className={classnames('status', { 'status--processing': [SocketStatus.connecting, SocketStatus.closing].includes(socketStatus) })}></div>
          <div className={classnames('status', { 'status--connected': socketStatus == SocketStatus.connected })}></div>
          <span onClick={() => console.log(socketStatus)} className="text">state: {socketStatus}</span>
        </div>
      </CardItem>
    </Container>
  );
};

export default WsStatus;
