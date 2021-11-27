import React, { useState, useReducer } from "react";
import { navigate } from "@reach/router";
import Scroll from "react-scroll";
import Back from "../../Components/Back";
import SliderBar from "../../Components/Slider";
import { Paper } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import connect from "./connect";

function App({
  charObj,
  index,
  part1Id,
  nextPart1CharObj,
  backPart1CharObj,
  updateIdealValue,
  updateRealValue,
  updatePart1Id,
}) {
  // console.log(charObj);

  Scroll.animateScroll.scrollToTop();
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(50);

  const handleSlideChange1 = (v) => {
    updateRealValue(v);
    setValue1(v);
  };
  const handleSlideChange2 = (v) => {
    updateIdealValue(v);
    setValue2(v);
  };

  const handleNext = () => {
    nextPart1CharObj();
    setValue1(50);
    setValue2(50);
  };

  const handlePart1Next = () => {
    if (part1Id === 0) {
      updatePart1Id();
      navigate("/part1");
    } else {
      updatePart1Id();
      navigate("/part2");
    }
  };

  return charObj ? (
    <div className="container">
      <Back className="return-icon" />
      <div className="part-i-title">
        <h2>第{part1Id === 0 ? "1.1" : "1.2"}部份 自評</h2>
        <hr />
        <div className="text-area">
          <h3>
            以下為妳在工作方面想擁有的特質，另一端為相關反義詞，請在第一條間線標示妳
            <strong>實際</strong>
            所處的位置，然後在第二條線妳<strong>希望</strong>自己達到的位置
          </h3>
        </div>
      </div>

      <div className="self-content">
        <Paper style={{ padding: "20px" }}>
          <div className="self-title">
            <h2>{`(${index + 1})${charObj.character}`}</h2>
          </div>
          <div className="self-silder-wrapper">
            <div className="self-slider">
              <h3>妳實際所處的位置</h3>
              <SliderBar callback={handleSlideChange1} pValue={value1} />
              <h2 style={{ color: "#0084da" }}>{charObj.realValue}</h2>
            </div>
            <div className="self-slider">
              <h3>妳希望自己達到的位置</h3>
              <SliderBar callback={handleSlideChange2} pValue={value2} />
              <h2 style={{ color: "#0084da" }}>{charObj.idealValue}</h2>
            </div>
          </div>

          <div className="self-title">
            <h2>{`(${index + 1}) ${charObj.negativeChar}`}</h2>
          </div>
        </Paper>
        <div className="progress-control">
          <div>
            <button onClick={() => backPart1CharObj()} disabled={index === 0}>
              <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
            </button>
          </div>
          <div>
            <button onClick={() => handleNext()} disabled={index >= 4}>
              <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
            </button>
          </div>
          {index === 4 ? (
            <div className="next-button">
              <button onClick={() => handlePart1Next()}>下一步</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <button className="button" onClick={() => navigate("/")}>
        回首頁
      </button>
    </div>
  );
}

export default connect(App);
