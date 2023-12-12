/*
 * @Date: 2023-12-03 12:31:31
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2023-12-04 10:36:21
 * @FilePath: \websocket-tool\src\component\wsStatus.tsx
 */
import styled from "styled-components";
import * as React from "react";
import CardItem from "./cardItem";
import { SocketStatus } from "@zs-ui/controllers";
import WsControllerContext from "./socketProvider";
import classnames from "classnames";

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
  console.log(wsController.connectStatus)
  setTimeout(() => {
    wsController.connect('ws://124.222.224.186:8800')
  }, 6000)

  return (
    <WsControllerContext.Consumer>
      {value => (
        <Container>
          <CardItem title="连接状态">
            <div className="status-group">
              <div className={classnames('status', { 'status--closed': wsController.connectStatus == SocketStatus.closed })}></div>
              <div className={classnames('status', { 'status--processing': [SocketStatus.connecting, SocketStatus.closing].includes(wsController.connectStatus) })}></div>
              <div className={classnames('status', { 'status--connected': wsController.connectStatus == SocketStatus.connected })}></div>
              <span className="text">state: {wsController.connectStatus}</span>
            </div>
          </CardItem>
        </Container>
      )}

    </WsControllerContext.Consumer>

  );
};

export default WsStatus;
