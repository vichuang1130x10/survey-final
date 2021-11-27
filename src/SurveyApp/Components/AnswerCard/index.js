import React from "react";
import styled from "styled-components";
import connect from "./connect";

const AnswerBlock = styled.div`
  border-radius: 3px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  transition: all 0.3s;
  margin-left: 20px;

  &:hover {
    background-color: #128ae7;
    color: #fff;
  }
  margin: 10px;
`;

const AnswerContainer = styled.div`
  width: 350px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  height: 80px;
`;

const Numbers = [
  { id: "1", isSelected: false },
  { id: "2", isSelected: false },
  { id: "3", isSelected: false },
  { id: "4", isSelected: false },
  { id: "5", isSelected: false },
];

function App({}) {
  const handleClick = (obj) => {
    console.log(obj.id);
  };
  return (
    <AnswerContainer>
      {Numbers.map((obj, i) => (
        <AnswerBlock key={i} onClick={() => handleClick(obj)}>
          {obj.id}
        </AnswerBlock>
      ))}
    </AnswerContainer>
  );
}

export default connect(App);
