import styled from "styled-components";
import React, { useState } from "react";
import CardItem from "./cardItem";
import Button from "@mui/material/Button";
import { Input, TextField } from "@mui/material";
import WsControllerContext from "./socketProvider";
import { SocketStatus } from "@zs-ui/ws-controllers";
import { ZsMessage } from "@zs-ui/components";

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
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.25rem;
    }
  }
`;
interface TemporarySendProps {
  setMessage: Function;
}

const TemporarySend: React.FC<TemporarySendProps> = ({ setMessage }: TemporarySendProps) => {
  const textFieldRef = React.useRef<HTMLInputElement>();
  const wsController = React.useContext(WsControllerContext);

  const startLoop = () => {
    if (wsController?.connectStatus !== SocketStatus.connected) {
      ZsMessage.warning({ content: "Please connect before you send." });
      return;
    }

    if (!textFieldRef?.current?.value) {
      ZsMessage.warning({ content: "The message cannot be empty." });
      return;
    }
    setMessage(textFieldRef.current?.value);
    wsController?.send(textFieldRef.current?.value);
  };

  return (
    <Container>
      <CardItem title="Temporary send">
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
            <Button
              disabled={wsController?.connectStatus !== SocketStatus.connected}
              fullWidth={true}
              onClick={() => startLoop()}
              variant="contained"
              size="small"
              color="success"
              disableElevation
            >
              send
            </Button>
          </div>
        </div>
      </CardItem>
    </Container>
  );
};

export default TemporarySend;
