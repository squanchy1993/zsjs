import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";
import Button from "@mui/material/Button";
import { Alert, Input } from "@mui/material";
import WsControllerContext from "./socketProvider";
import { ZsMessage } from "@zsjs/mui-components";
import { SocketStatus } from "@zsjs/ws-controllers";

const Container = styled.div`
  width: 100%;
  height: 100px;
  .input-group {
    display: flex;
    height: 36px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    .title {
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
  const wsController = React.useContext(WsControllerContext);
  // const setOptions
  const inputRef = React.useRef<HTMLInputElement>();

  const connect = async () => {
    try {
      if (!inputRef.current?.value) {
        ZsMessage.error({ content: "address must input", duration: 1000 });
        return;
      }

      wsController?.setOptions({ wsOptions: { address: inputRef.current?.value } });
      await wsController?.connect();
    } catch (error) {
      ZsMessage.error({ content: `${error?.message ?? error}`, duration: 2000 });
    }
  };
  return (
    <Container>
      <CardItem title="Server">
        <div className="input-group">
          <div className="title">Server address</div>
          <Input
            inputRef={inputRef}
            fullWidth
            size="small"
            placeholder="ws address"
            defaultValue={"ws://124.222.224.186:8800"}
            disableUnderline={true}
          />
          <Button
            disabled={wsController?.connectStatus !== SocketStatus.closed}
            onClick={() => connect()}
            variant="contained"
            size="small"
            color="success"
            disableElevation
          >
            connect
          </Button>
          <Button
            disabled={wsController?.connectStatus !== SocketStatus.connected}
            onClick={() => wsController?.close()}
            variant="contained"
            size="small"
            color="warning"
            disableElevation
          >
            close
          </Button>
        </div>
      </CardItem>
    </Container>
  );
};

export default WsConfig;
