/*
 * @Date: 2023-12-03 12:31:31
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2023-12-04 10:36:21
 * @FilePath: \websocket-tool\src\component\wsStatus.tsx
 */
import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";

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
  return (
    <>
      <Container>
        <CardItem title="连接状态">
          <div className="status-group">
            <div className="status status--closed"></div>
            <div className="status status--processing"></div>
            <div className="status status--connected"></div>
            <span className="text">state: closed</span>
          </div>
        </CardItem>
      </Container>
    </>
  );
};

export default WsStatus;
