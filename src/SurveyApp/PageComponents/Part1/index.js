import React, { useState, useEffect } from "react";

import { navigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Paper, Grid, Button, Chip, TextField } from "@material-ui/core";

import Back from "../../Components/Back";
import Card from "../../Components/Card";
import Row from "../../Components/Row";

import connect from "./connect";

const workText = "工作";
const homeText = "家庭";

function App({
  // updatePart1CharIndex,
  getPart1Chars,
  chars,
  udpatePart1CharSelect,
  resetPart1Index,
  part1Id,
  // resetSelectChar,
}) {
  const [cardState, modifyCardState] = useState([]);
  const [selectedState, modifySlectedState] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    // resetSelectChar();
    // updatePart1CharIndex(0);
    window.scrollTo(0, 0);
    getPart1Chars();
    resetPart1Index();
    modifyCardState(chars);
    modifySlectedState([]);
  }, [chars]);

  const handleOnClick = (title) => {
    const selectedCharacter = cardState.filter(
      (ele) => ele.character === title
    )[0];

    handleSelected(selectedCharacter);

    const udpateState = cardState.map((ele) =>
      ele.character === title ? { ...ele, toggle: !ele.toggle } : ele
    );

    modifyCardState(udpateState);
  };

  const handleSelected = (obj) => {
    if (selectedState.some((ele) => ele.character === obj.character)) {
      const updateSelectedState = selectedState.filter(
        (ele) => ele.character !== obj.character
      );

      modifySlectedState(updateSelectedState);
    } else {
      const updateSelectedState = [...selectedState, obj];
      modifySlectedState(updateSelectedState);
    }
  };

  const handleDelete = (label) => {
    const updateSelectedState = selectedState.filter(
      (ele) => ele.character !== label
    );
    const udpateState = cardState.map((ele) =>
      ele.character === label ? { ...ele, toggle: false } : ele
    );
    modifySlectedState(updateSelectedState);
    modifyCardState(udpateState);
  };

  const handleNextStep = () => {
    if (selectedState.length < 5) {
      alert("請選擇5個特質");
      return;
    }

    if (selectedState.length > 5) {
      alert("只能選5個特質");
      return;
    }

    udpatePart1CharSelect(selectedState);
    navigate(`/part1-self-evaluation`);
  };

  const addCustomerCharacter = () => {
    if (text === "") {
      return;
    }
    const newCharacter = {
      number: cardState.length + 1,
      character: text,
      toggle: false,
      idealValue: 50,
      realValue: 50,
      negativeChar: `無法${text}`,
    };
    setText("");
    const updateSet = [...cardState, newCharacter];
    modifyCardState(updateSet);
  };

  return (
    <div className="container">
      <Back className="return-icon" />
      <div className="part-i-title">
        <h2>第{part1Id === 0 ? "1.1" : "1.2"}部份 </h2>
        <hr />
        <div className="text-area">
          <h3>
            {`${part1Id === 0 ? workText : homeText}`}
            方面，妳希望自己是個怎樣的人，或是想要什麼樣子？請從以下列表選岀5個妳在
            <u>
              <strong>{`${part1Id === 0 ? workText : homeText}`}方面</strong>
            </u>
            希望擁有或達到的特質，無論妳現在是否具備這些特質。如果未能在列中選擇到適合的特質，請在空白處填寫。
          </h3>
        </div>
      </div>

      <div className="part-i-content">
        <Paper style={{ padding: 16 }}>
          <Row title={`已選擇: (${selectedState.length})/5 `}>
            <Grid container alignItems="flex-start" spacing={2}>
              {selectedState.map((ele, index) => (
                <Grid item key={index + ele.character}>
                  <Chip
                    label={ele.character}
                    onDelete={() => handleDelete(ele.character)}
                  />
                </Grid>
              ))}
            </Grid>
          </Row>
          <Grid container alignItems="flex-start" spacing={2}>
            {cardState.map((ele, index) => (
              <Grid item key={index}>
                <Card
                  title={ele.character}
                  onCardClick={handleOnClick}
                  toggled={ele.toggle}
                />
              </Grid>
            ))}
          </Grid>
          <div style={{ marginTop: "20px" }}>
            <h4 style={{ marginBottom: "20px" }}> 自定特質 : </h4>
            <div className="input-container">
              <TextField
                id="outlined-basic"
                label="特質"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="custom-container">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => addCustomerCharacter()}
                >
                  加入自定特質
                  <span style={{ marginLeft: "10px" }}>
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => handleNextStep()}
            >
              下一頁
            </Button>
          </div>
        </Paper>
      </div>
      <div style={{ marginTop: "100px", height: "50px" }}></div>
    </div>
  );
}

export default connect(App);
