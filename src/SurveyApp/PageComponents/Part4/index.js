import { Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import Back from "../../Components/Back";
import { navigate } from "@reach/router";
import QuestionCard from "../../Components/QuestionCard";
import AnswerCard from "../../Components/AnswerCard";
import { Part4Questions, Numbers } from "../../Text";
import Button from "../../Components/Button";
import connect from "./connect";

function App({ part4Answer }) {
  const handlePart4Next = () => {
    if (part4Answer.includes(0)) {
      window.alert("請完成全部題目");
      return;
    }
    navigate("/finish");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <Back className="return-icon" />
      <div className="part-i-title">
        <h2>第4部份</h2>
        <hr />
        <div className="text-area">
          <h3>妳認為下列描述是否符合妳的實際情況？請選擇適當的數字(1-5)</h3>
        </div>
      </div>

      <div className="self-content">
        <Paper style={{ padding: "20px" }}>
          {Part4Questions.map((q, i) => (
            <div key={i}>
              <QuestionCard title={q} id={i} />
              <h4>1 =非常不同意 2 =不同意 3=普通 4 =同意 5 =非常同意</h4>
              <AnswerCard part={"part4"} question={i} numbers={Numbers} />
            </div>
          ))}
        </Paper>
        <div>
          <Button onClick={() => handlePart4Next()}>下一步</Button>
        </div>
      </div>
      <div style={{ marginTop: "100px", height: "50px" }}></div>
    </div>
  );
}

export default connect(App);
