/*
 * @Date: 2023-12-03 12:31:31
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2023-12-05 10:28:10
 * @FilePath: \websocket-tool\src\component\temporarySend.tsx
 */
import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";
import Button from '@mui/material/Button';

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
      & > button {
        width: 100% !important;
      }
    }
  }
`;
const TemporarySend: React.FC = () => {
  return (
    <>
      <Container>
        <CardItem title="临时发送">
          <div className="send-group">
            <div className="text-content"></div>
            <div className="input-content">
              <Button variant="contained" size="small" color="success" disableElevation>
                发送
              </Button>
            </div>
          </div>
        </CardItem>
      </Container>
    </>
  );
};

export default TemporarySend;
