/*
 * @Date: 2023-12-03 12:31:31
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2023-12-04 18:55:33
 * @FilePath: \websocket-tool\src\component\WsConfig.tsx
 */
import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";
import Button from '@mui/material/Button';
import { Input } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 100px;
  .input-group{
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
`;

const WsConfig: React.FC = () => {
  return (
    <>
      <Container>
        <CardItem title="服务器配置" >
          <div className="input-group">
            <div className="title">服务地址</div>
            <Input
              fullWidth
              size="small"
              placeholder="ws address"
              disableUnderline={true}
            />
            <Button variant="contained" size="small" color="success" disableElevation>
              搜索
            </Button>
          </div>
        </CardItem>
      </Container>
    </>
  );
};

export default WsConfig;
