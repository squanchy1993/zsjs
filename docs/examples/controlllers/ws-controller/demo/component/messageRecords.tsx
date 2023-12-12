/*
 * @Date: 2023-12-03 12:31:31
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2023-12-05 15:34:01
 * @FilePath: \websocket-tool\src\component\MessageRecords.tsx
 */
import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";
import { Radio, FormControlLabel, Button } from '@mui/material';

const Container = styled.div`
  flex: 1;
  width: 100%;
  .message-group {
    height: 100%;
    display: flex;
    flex-direction: column;
    .operation-content {
      display: flex;
      height: 36px;
      margin-bottom: 10px;
    }
    .message-content{
      width: 100%;
      flex: 1;
      background: #000;
      border-radius: 0.25rem;
    }
  }
`;

const WsStatus: React.FC = () => {
  return (
    <>
      <Container>
        <CardItem title="消息记录">
          <div className="message-group">
            <div className="operation-content">
              <FormControlLabel control={<Radio />} label="停止接收" />
              <Button variant="text" size="small" color="success">清空</Button>
            </div>
            <div className="message-content"></div>

          </div>
        </CardItem>
      </Container>
    </>
  );
};

export default WsStatus;
