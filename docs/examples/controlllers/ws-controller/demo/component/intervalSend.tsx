import styled from "styled-components";
import React, { useState } from "react";
import CardItem from "./cardItem";
import Button from '@mui/material/Button';
import { Input, TextField } from "@mui/material";
import { loopFunc } from "@zs-ui/utils"
import WsControllerContext from "./socketProvider";
import { SocketStatus } from "@zs-ui/ws-controllers";
import { ZsMessage } from "@zs-ui/components";
import { useOnMount } from "@zs-ui/hooks";

const Container = styled.div`
  width: 100%;
  .send-group {
    height: fit-content;
    display: flex;
    flex-direction: column;
    .text-content {
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

interface IntervalSendProps {
  setMessage: Function;
}

let loopLoigc: any = null;
const IntervalSend: React.FC<IntervalSendProps> = ({ setMessage }: IntervalSendProps) => {
  const textFieldRef = React.useRef<HTMLInputElement>();
  const [open, setOpen] = React.useState(false);
  const wsController = React.useContext(WsControllerContext);

  useOnMount(() => {
    loopLoigc = loopFunc(async () => {
      if (wsController?.connectStatus !== SocketStatus.connected) {
        loopLoigc.stop();
        setOpen(false)
        return
      }

      setMessage(textFieldRef.current?.value)
      wsController?.send(textFieldRef.current?.value ?? '')
    }, 1000)
  })

  const startLoop = () => {
    if (wsController?.connectStatus !== SocketStatus.connected) {
      ZsMessage.warning({ content: '请先开启链接' })
      return
    }

    if (!textFieldRef?.current?.value) {
      ZsMessage.warning({ content: '请输入要发送的内容' })
      return
    }
    loopLoigc.start();
    setOpen(true)
  }

  return (
    <Container>
      <CardItem title="Interval send">
        <div className="send-group">
          <TextField
            inputRef={textFieldRef}
            className="text-content"
            id="outlined-textarea"
            multiline
            variant="outlined"
            maxRows={4}
          />
          <div className="input-content">
            <div className="title">interval(seconds)</div>
            <Input
              fullWidth
              size="small"
              placeholder="ws address"
              disableUnderline={true}
              type="number"
              defaultValue={1}
              onChange={(event) => {
                loopLoigc.setTime(Number(event.target.value) * 1000)
              }}
              inputProps={{ min: 0 }}
            />


            <Button disabled={wsController?.connectStatus !== SocketStatus.connected} style={{ display: !open ? "block" : "none" }} onClick={() => startLoop()} variant="contained" size="small" color="success" disableElevation>
              start
            </Button>
            <Button disabled={wsController?.connectStatus !== SocketStatus.connected} style={{ display: !open ? "none" : "block" }} onClick={() => { loopLoigc.stop(); setOpen(false) }} variant="contained" size="small" color="success" disableElevation>
              close
            </Button>
          </div>
        </div>
      </CardItem>
    </Container>
  );
};

export default IntervalSend;
