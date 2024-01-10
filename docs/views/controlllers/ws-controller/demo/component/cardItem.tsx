import styled from "styled-components";
import React, { ReactNode } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & .card__header.header {
    width: inherit;
    height: 40px;
    border-bottom: 1px dashed #ccc;
    display: flex;
    .header__left {
      width: fit-content;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  & .card__body {
    width: inherit;
    flex: 1;
    margin: 10px 0;
  }
`;

interface RobotProps {
  title: string;
  children?: ReactNode;
  header?: ReactNode;
}

const CardItem: React.FC<RobotProps> = ({ title, children, header }) => {
  return (
    <>
      <Container>
        <section className="card__header header">
          <div className="header__left">{title}</div>
          <div className="header__right">{header}</div>
        </section>
        <section className="card__body">{children}</section>
      </Container>
    </>
  );
};

export default CardItem;
