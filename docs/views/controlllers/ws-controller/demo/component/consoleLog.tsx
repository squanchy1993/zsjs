import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";
import { Radio, FormControlLabel, Button, Checkbox } from "@mui/material";
import WsControllerContext from "./socketProvider";
import dayjs from "dayjs";
import classNames from "classnames";
import { useOnMount, useOnUnmount, useOnUpdate } from "@zsjs/hooks";
import { SocketStatus } from "@zsjs/ws-controller";

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
    .message-content {
      width: 100%;
      border-radius: 0.25rem;
      background-color: #ededed;
      padding: 5px;
      height: 200px;
      overflow-y: scroll;
      .message-item {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        font-size: 10px;
        &__title {
          width: 110px;
        }
        &__body {
          color: #1b1b1b;
          margin: 0;
          box-sizing: border-box;
          max-width: calc(100% - 110px);
        }
      }
    }
  }
`;

let scrollEnd = false;
const MessageRecords = React.forwardRef((props, ref: any) => {
  const wsController = React.useContext(WsControllerContext);
  const [messageRecord, setMessageRecord] = React.useState<{ time: string, message: string }[]>([]);
  const messageContentRef = React.useRef<HTMLDivElement | null>(null);
  let reciveMessage = React.useRef(true);

  React.useEffect(() => {
    if (scrollEnd) {
      scrollToBottom();
    }
  }, [JSON.stringify(messageRecord)]);

  useOnMount(() => {
    wsController?.addEventListener('log', logMessage)
    messageContentRef?.current?.addEventListener("scroll", handleScroll);
  });

  useOnUnmount(() => {
    wsController?.removeEventListener("log", logMessage);
  });

  const logMessage = (message: string) => {
    setMessageRecord((prev: { time: string, message: string }[]) => {
      prev.push({
        time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        message,
      });
      let newArr = prev.slice();
      return newArr;
    });
  }

  const handleScroll = (e) => {
    const {scrollTop = 0, scrollHeight = 0, clientHeight = 0 } = messageContentRef!.current as HTMLDivElement;
    let isScrollEnd = Math.abs(scrollTop - (scrollHeight - clientHeight)) < 2;

    if (isScrollEnd !== scrollEnd) {
      scrollEnd = isScrollEnd;
    }
  };

  const scrollToBottom = () => {
    if (!messageContentRef.current) {
      return;
    }

    const { scrollHeight = 0, clientHeight = 0 } = messageContentRef!
      .current as HTMLDivElement;

    messageContentRef!.current.scrollTop = scrollHeight - clientHeight;
  };

  const handleReciveCheckboxhange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      wsController?.heartbeat.send()
    } else {
      wsController?.heartbeat.clear()
    }
  };

  const clearMessage = () => {
    setMessageRecord([]);
  };

  return (
    <Container>
      <CardItem title="Debug information">
        <div className="message-group">
          <div className="operation-content">
            <FormControlLabel control={
              <Checkbox
                disabled={wsController?.connectStatus !== SocketStatus.connected}
                defaultChecked={reciveMessage.current}
                onChange={handleReciveCheckboxhange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            } label="heartbeat controller" />
            <Button onClick={clearMessage} variant="text" size="small" color="success">
              clear
            </Button>
          </div>
          <div ref={messageContentRef} className="message-content">
            {messageRecord.map((item, index) => (
              <div
                className={"message-item"}
                key={index}
              >
                <div className="message-item__title">{item.time}</div>
                <div className="message-item__body">{item.message}</div>
              </div>
            ))}
          </div>
        </div>
      </CardItem>
    </Container>
  );
});

export default MessageRecords;
