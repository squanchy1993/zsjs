import styled from "styled-components";
import React from "react";
import CardItem from "./cardItem";
import { Radio, FormControlLabel, Button, Checkbox } from "@mui/material";
import WsControllerContext from "./socketProvider";
import dayjs from "dayjs";
import classNames from "classnames";
import { useOnMount, useOnUnmount, useOnUpdate } from "@zs-ui/hooks";

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
      height: 666px;
      overflow-y: scroll;
      .message-item {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        &__title {
          .avatar {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border-radius: 5px;
          }
        }
        &__body {
          color: #1b1b1b;
          margin: 0 10px;
          box-sizing: border-box;
          max-width: calc(100% - 120px);
          .body__content {
            width: 100%;
            border-radius: 5px;
            color: #1b1b1b;
            font-size: 12px;
            min-height: 50px;
            line-height: 24px;
            padding: 14px 5px;
          }
          .body__time {
            font-size: 12px;
            line-height: 18px;
            padding: 0;
            margin: 0;
          }
        }
      }
      .message-item.message-item--client {
        .left {
          display: flex;
        }
        .message-item__body {
          .body__content {
            background-color: #95ec6a;
          }
          .body__time {
            text-align: right;
          }
        }
      }
      .message-item.message-item--server {
        flex-direction: row-reverse;
        .right {
          display: flex;
        }
        .message-item__body {
          .body__content {
            background-color: #fff;
          }
          .body__time {
            text-align: left;
          }
        }
      }
    }
  }
`;

type MessageType = {
  type: "server" | "client";
  time: string;
  message: String;
};

let scrollEnd = false;
const MessageRecords = React.forwardRef((props, ref: any) => {
  const wsController = React.useContext(WsControllerContext);
  const [messageRecord, setMessageRecord] = React.useState<MessageType[]>([]);
  const messageContentRef = React.useRef<HTMLDivElement | null>(null);
  let reciveMessage = React.useRef(true);

  React.useImperativeHandle(ref, () => ({
    addTomessageRecord: (msg: string) => {
      setMessageRecord((prev: MessageType[]) => {
        prev.push({
          type: "client",
          time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          message: msg,
        });
        let newArr = prev.slice();
        setTimeout(() => {
          scrollToBottom();
        }, 500);
        return newArr;
      });
    },
  }));

  React.useEffect(() => {
    if (scrollEnd) {
      scrollToBottom();
    }
  }, [JSON.stringify(messageRecord)]);

  useOnMount(() => {
    wsController?.addEventListener("message", message);
    messageContentRef?.current?.addEventListener("scroll", handleScroll);
  });

  useOnUnmount(() => {
    wsController?.removeEventListener("message", message);
  });

  const message = (e: any) => {
    if (!reciveMessage.current) {
      return;
    };
    if (e.data.includes("heartbeat")) {
      return;
    }
    setMessageRecord((prev: MessageType[]) => {
      prev.push({
        type: "server",
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        message: e.data,
      });
      let newArr = prev.slice();
      return newArr;
    });
  };

  const handleScroll = (e) => {
    const {scrollTop = 0 ,scrollHeight = 0, clientHeight = 0 } = messageContentRef!
      .current as HTMLDivElement;
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
    reciveMessage.current = event.target.checked
  };

  const clearMessage = () => {
    setMessageRecord([]);
  };

  return (
    <Container>
      <CardItem title="Message record">
        <div className="message-group">
          <div className="operation-content">
            <FormControlLabel control={
              <Checkbox
                defaultChecked={reciveMessage.current}
                onChange={handleReciveCheckboxhange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            } label="receive controller" />
            <Button onClick={clearMessage} variant="text" size="small" color="success">
              clear
            </Button>
          </div>
          <div ref={messageContentRef} className="message-content">
            {messageRecord.map((item, index) => (
              <div
                className={classNames(
                  "message-item",
                  `message-item--${item.type == "client" ? "client" : "server"}`
                )}
                key={index}
              >
                <div className="message-item__title">
                  <div className="avatar">
                    <span className="name">{item.type}</span>
                  </div>
                </div>
                <div className="message-item__body">
                  <div className="body__content"> {item.message}</div>
                  <p className="body__time">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardItem>
    </Container>
  );
});

export default MessageRecords;
