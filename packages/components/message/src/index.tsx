import React from "react";
import { createRoot } from "react-dom/client";

import { Alert, AlertColor, Snackbar } from "@mui/material";

function Message({
  content,
  duration,
  type,
  handleClose,
}: {
  content: React.ReactNode;
  duration: number;
  type: AlertColor;
  handleClose: Function;
}) {
  // 开关控制：默认true,调用时会直接打开
  const [open, setOpen] = React.useState(true);

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() => {
        setOpen(false);
        handleClose();
      }}
    >
      <Alert severity={type}>{content}</Alert>
    </Snackbar>
  );
}

export default class ZsMessage {
  static success({
    content,
    duration,
  }: {
    content: string;
    duration?: number;
  }) {
    this.renderMessage({
      content: <span>{content}</span>,
      duration,
      type: "success",
    });
  }

  static error({ content, duration }: { content: string; duration?: number }) {
    this.renderMessage({
      content: <span>{content}</span>,
      duration,
      type: "error",
    });
  }
  static warning({
    content,
    duration,
  }: {
    content: string;
    duration?: number;
  }) {
    this.renderMessage({
      content: <span>{content}</span>,
      duration,
      type: "warning",
    });
  }
  static info({ content, duration }: { content: string; duration?: number }) {
    this.renderMessage({
      content: <span>{content}</span>,
      duration,
      type: "info",
    });
  }

  static renderMessage({
    content,
    duration = 1000,
    type,
  }: {
    content: React.ReactNode;
    duration?: number;
    type: AlertColor;
  }) {
    // 创建一个dom
    const dom = document.createElement("div");
    const root = createRoot(dom);

    // 结束后 移除
    const handleClose = () => {
      dom?.parentNode?.removeChild(dom);
    };
    // 定义组件，
    const JSXdom = (
      <Message
        content={content}
        duration={duration}
        type={type}
        handleClose={handleClose}
      ></Message>
    );
    // 渲染DOM
    root.render(JSXdom);
    // 置入到body节点下
    document.body.appendChild(dom);
  }
}
