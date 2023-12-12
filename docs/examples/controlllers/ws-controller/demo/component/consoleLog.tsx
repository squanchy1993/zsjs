/*
 * @Date: 2023-12-03 12:31:31
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2023-12-05 14:43:36
 * @FilePath: \websocket-tool\src\component\ConsoleLog.tsx
 */
import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";

const Container = styled.div`
  flex: 1;
  width: 100%;
  .console-group {
    height: 150px;
    display: flex;
    flex-direction: column;
    background: #000;
  }
`;

const WsStatus: React.FC = () => {
  return (
    <>
      <Container>
        <CardItem title="调试信息">
          <div className="console-group">
          </div>
        </CardItem>
      </Container>
    </>
  );
};

export default WsStatus;
