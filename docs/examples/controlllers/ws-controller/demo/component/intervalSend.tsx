/*
 * @Date: 2023-12-03 12:31:31
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2023-12-05 10:44:18
 * @FilePath: \websocket-tool\src\component\IntervalSend.tsx
 */
import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";
import Button from '@mui/material/Button';
import { Input } from "@mui/material";

const Container = styled.div`
  width: 100%;
  .send-group {
    height: 150px;
    display: flex;
    flex-direction: column;
    .text-content {
      flex: 1;
      width: 100%;
      border: 1px solid red;
      margin-bottom: 5px;
    }
    .input-content {
      display: flex;
      height: 36px;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: 0.25rem;
      .title{
        line-height: 36px;
        font-size: 14px;
        padding: 0 5px;
        text-align: center;
        white-space: nowrap;
        background-color: #e9ecef;
      }
      & input {
        padding: 0 10px;
      }
    }
  }
`;

const WsStatus: React.FC = () => {
  return (
    <>
      <Container>
        <CardItem title="定时发送">
          <div className="send-group">
            <div className="text-content"></div>
            <div className="input-content">
              <div className="title">发送间隔</div>
              <Input
                fullWidth
                size="small"
                placeholder="ws address"
                disableUnderline={true}
                type="number"
              />
              <Button variant="contained" size="small" color="success" disableElevation>
                开始
              </Button>
            </div>
          </div>
        </CardItem>
      </Container>
    </>
  );
};

export default WsStatus;
