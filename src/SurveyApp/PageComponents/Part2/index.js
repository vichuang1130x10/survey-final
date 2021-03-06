import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";

import Back from "../../Components/Back";
import QuestionCard from "../../Components/QuestionCard";
import AnswerCard from "../../Components/AnswerCard";
import { Part2AQuestions, Part2BQuestions, Numbers } from "../../Text";

import { Paper } from "@material-ui/core";

import connect from "./connect";
import Button from "../../Components/Button";

function App({ part2Id, updatePart2Id, part2AAnswer, part2BAnswer }) {
  const [question, setQuestion] = useState([]);
  const [numbers, updateNumbers] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    let qs;
    if (part2Id === 0) {
      qs = Part2AQuestions;
    } else {
      qs = Part2BQuestions;
    }

    setQuestion(qs);
    console.log(Numbers);
    updateNumbers(Numbers.map((a) => ({ ...a })));
  }, [part2Id]);

  const handlePart2Next = () => {
    console.log("A", part2AAnswer);
    console.log("B", part2BAnswer);
    if (part2Id === 0) {
      if (part2AAnswer.includes(0)) {
        window.alert("請完成全部題目");
        return;
      }
      updatePart2Id();
    } else {
      if (part2BAnswer.includes(0)) {
        window.alert("請完成全部題目");
        return;
      }

      updatePart2Id();
      navigate("part3");
    }
  };

  return (
    <div className="container">
      <Back className="return-icon" />
      <div className="part-i-title">
        <h2>第{part2Id === 0 ? "2.1" : "2.2"}部份</h2>
        <hr />
        <div className="text-area">
          <h3>
            妳是否同意以下句子？請以1 -
            5分評量。評分沒有對錯好壞之分，請以真實感受作答就可。
          </h3>
        </div>
      </div>

      <div className="self-content">
        <Paper style={{ padding: "20px" }}>
          <div className="part2-title">
            <h3>妳是否同意以下句子？ </h3>
          </div>
          {question.map((q, i) => (
            <div key={i}>
              <QuestionCard title={q} id={i} />
              <h4>1 =非常不同意 2 =不同意 3=普通 4 =同意 5 =非常同意</h4>
              <AnswerCard part={"part2"} question={i} numbers={numbers} />
            </div>
          ))}
        </Paper>
        <div>
          <Button onClick={() => handlePart2Next()}>下一步</Button>
        </div>
      </div>
      <div style={{ marginTop: "100px", height: "50px" }}></div>
    </div>
  );
}

export default connect(App);
