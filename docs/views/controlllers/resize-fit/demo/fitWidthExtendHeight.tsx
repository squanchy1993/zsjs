import styled from "styled-components";
import React, { useEffect } from "react";
import { ResizeFit } from "@zsjs/resize-fit"
import { useOnUnmount } from "@zsjs/hooks";

const Container = styled.div`
  width: 100%;
  height: 400px;
  .father {
    width: 300px;
    height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    resize: both;
    overflow: hidden;
    .child {
      width: 300px;
      height: 150px;
      background-color: red;
      .constaintArea {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: yellow;
      }
      .extendArea {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: green;
      }
    }
  }
`;

const WsConfig: React.FC = () => {
  let father = React.useRef<HTMLDivElement | null>(null)
  let child = React.useRef<HTMLDivElement | null>(null)
  let resizeFit: ResizeFit
  useEffect(() => {
    resizeFit = new ResizeFit({ container: father.current as HTMLElement, target: child.current as HTMLElement, mode: 'fitWidthExtendHeight' })
  }, [])

  useOnUnmount(() => {
    resizeFit.dispose()
  });
  return (
    <Container>
      <div ref={father} className="father">
        <div ref={child} className="child">
          <div className="constaintArea">
            <span style={{ fontSize: '28px' }}>constaint area</span>
          </div>
          <div className="extendArea">
            <span style={{ fontSize: '28px' }}>extend area</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WsConfig;
