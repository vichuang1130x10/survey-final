import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import Scroll from "react-scroll";
import Back from "../../Components/Back";
import QuestionCard from "../../Components/QuestionCard";
import AnswerCard from "../../Components/AnswerCard";
import { Part2AQuestions, Part2BQuestions } from "../../Text";

import { Paper } from "@material-ui/core";

import connect from "./connect";

function App({ part2Id, updatePart2Id }) {
  Scroll.animateScroll.scrollToTop();

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    let qs;
    if (part2Id === 0) {
      qs = Part2AQuestions;
    } else {
      qs = Part2BQuestions;
    }
    setQuestion(qs);
  }, [part2Id]);

  const handlePart2Next = () => {
    if (part2Id === 0) {
      updatePart2Id();
    } else {
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
          <div style={{ display: "flex" }}>
            <h3>妳是否同意以下句子？ </h3>
            <h3 style={{ marginLeft: "100px" }}>1=完全不同意 5=完全同意</h3>
          </div>
          {question.map((q, i) => (
            <div key={i}>
              <QuestionCard title={q} id={i} />
              <AnswerCard />
            </div>
          ))}
        </Paper>
        <div className="next-button">
          <button onClick={() => handlePart2Next()}>下一步</button>
        </div>
      </div>
    </div>
  );
}

export default connect(App);
