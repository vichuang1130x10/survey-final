import React, { useState } from "react";
import styled, { css } from "styled-components";
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
  ${(props) =>
    props.isSelected &&
    css`
      background: #00bf6f;
      color: #fff;
    `}
  &:hover {
    background-color: #00bf60;
    color: #fff;
  }
  margin: 10px;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    margin-left: 6px;
  }
`;

const AnswerContainer = styled.div`
  width: 350px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  height: 80px;
  @media (max-width: 600px) {
    width: 300px;
    margin: 10px 0;

    height: 60px;
  }
`;

// const Numbers = [
//   { id: "1", isSelected: false },
//   { id: "2", isSelected: false },
//   { id: "3", isSelected: false },
//   { id: "4", isSelected: false },
//   { id: "5", isSelected: false },
// ];

function App({ part, question, numbers, answerQuiz }) {
  const [nums, updateNumbers] = useState([]);

  React.useEffect(() => {
    updateNumbers(numbers);
  }, [numbers]);

  const handleClick = (obj) => {
    const existNumbers = nums.filter((o) => o.isSelected === true)[0] || {
      id: "0",
    };
    if (obj.id === existNumbers.id) {
      return;
    }
    console.log(obj);
    const newNumbers = nums.map((ele) =>
      ele.id === obj.id
        ? Object.assign({}, { ...obj, isSelected: !obj.isSelected })
        : { ...ele, isSelected: false }
    );
    console.log(newNumbers);
    const n = newNumbers.filter((ele) => ele.isSelected === true)[0].id;
    answerQuiz(part, question, Number(n));
    updateNumbers(newNumbers);
  };
  return (
    <AnswerContainer>
      {nums.map((obj, i) => (
        <AnswerBlock
          key={i}
          onClick={() => handleClick(obj)}
          isSelected={obj.isSelected}
        >
          {obj.id}
        </AnswerBlock>
      ))}
    </AnswerContainer>
  );
}

export default connect(App);
