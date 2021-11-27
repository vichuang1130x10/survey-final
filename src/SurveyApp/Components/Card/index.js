import React from "react";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  background-color: ${(props) => (props.toggled ? "#f7f7f7" : "#ffffff")};
  border-radius: 0px;
  border: 1px solid #e8e8e8;
  padding: 10px;
  color: ${(props) => (props.toggled ? "#555" : "#888")};
  padding: 6px 20px;

  transition: all 0.3s;

  &:hover {
    color: #555;
    background-color: #f7f7f7;
  }
`;

export default function App({ title, onCardClick, toggled }) {
  return (
    <Card toggled={toggled} onClick={() => onCardClick(title)}>
      {title}
    </Card>
  );
}
