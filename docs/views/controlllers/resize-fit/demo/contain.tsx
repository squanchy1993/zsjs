import styled from "styled-components";
import React, { useEffect } from "react";
import { ResizeFit } from "@zsjs/resize-fit"
import { useOnUnmount } from "@zsjs/hooks";

const Container = styled.div`
  width: 100%;
  height: 400px;
  .father {
    display: flex;
    width: 200px;
    height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    resize: both;
    overflow: hidden;
    .child {
      width: 300px;
      height: 150px;
      background-color: red;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const WsConfig: React.FC = () => {
  let father = React.useRef<HTMLDivElement | null>(null)
  let child = React.useRef<HTMLDivElement | null>(null)
  let resizeFit: ResizeFit
  useEffect(() => {
    resizeFit = new ResizeFit({ container: father.current as HTMLElement, target: child.current as HTMLElement, mode: 'contain' })
  }, [])

  useOnUnmount(() => {
    resizeFit.dispose()
  });
  return (
    <Container>
      <div ref={father} className="father">
        <div ref={child} className="child">
        <span style={{fontSize: '58px'}}>ResizeFit</span>
        </div>
      </div>
    </Container>
  );
};

export default WsConfig;
