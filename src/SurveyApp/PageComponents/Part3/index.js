import { Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import Back from "../../Components/Back";
import { navigate } from "@reach/router";
import { Part3Adjs, Numbers } from "../../Text";
import QuestionCard from "../../Components/QuestionCard";
import AnswerCard from "../../Components/AnswerCard";
import Button from "../../Components/Button";
import connect from "./connect";

function App({ part3Answer }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePart3Next = () => {
    if (part3Answer.includes(0)) {
      window.alert("請完成全部題目");
      return;
    }
    navigate("/part4");
  };

  return (
    <div className="container">
      <Back className="return-icon" />
      <div className="part-i-title">
        <h2>第3部份</h2>
        <hr />
        <div className="text-area">
          <h3>
            以下有許多形容詞，請問妳平常感受到下列每一項的程度為何？請選擇適當的數字。
          </h3>
        </div>
      </div>

      <div className="self-content">
        <Paper style={{ padding: "20px" }}>
          {Part3Adjs.map((q, i) => (
            <div key={i}>
              <QuestionCard title={q} id={i} />
              <h4>1 =從來沒有 2 =很少 3=普通 4 =相當多 5 =經常</h4>
              <AnswerCard part={"part3"} question={i} numbers={Numbers} />
            </div>
          ))}
        </Paper>
        <div>
          <Button onClick={() => handlePart3Next()}>下一步</Button>
        </div>
      </div>
      <div style={{ marginTop: "100px", height: "50px" }}></div>
    </div>
  );
}

export default connect(App);
