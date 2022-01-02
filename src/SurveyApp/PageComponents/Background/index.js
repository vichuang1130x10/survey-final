import { navigate } from "@reach/router";
import { Form, Field } from "react-final-form";

import { TextField, Radio } from "final-form-material-ui";
import {
  Paper,
  Grid,
  Button,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import connect from "./connect.js";
import { title } from "../../Text";
import React from "react";
import axios from "axios";

const validate = (values) => {
  const errors = { submitting: true };
  if (!values.age) {
    errors.age = "Required";
  }

  if (values.age <= 12) {
    errors.age = "請再次確認年齡";
  }

  if (values.chirdrenNumber < 0) {
    errors.chirdrenNumber = "Wrong Value";
  }

  if (values.youngest < 0) {
    errors.youngest = "Wrong Value";
  }

  if (!values.marriage) {
    errors.marriage = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};
function App({ resetState, updateBackground, saveUserIp }) {
  const [ip, setIP] = React.useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");

    setIP(res.data.IPv4);
  };
  React.useEffect(() => {
    resetState();
    getData();
    window.scrollTo(0, 0);
  }, []);

  // const onSubmit = (v) => {
  //   console.log("submit");
  //   updateBackground(v);
  //   navigate("/part1");
  // };
  return (
    <div className="container">
      <div className="landing-title">
        <h2>{title}</h2>
      </div>
      <div className="background-page">
        <h2 style={{ marginBottom: "20px" }}>背景資料</h2>
        <Form
          onSubmit={() => console.log("submit")}
          initialValues={{}}
          validate={validate}
          render={({
            handleSubmit,
            reset,
            submitting,
            pristine,
            values,
            errors,
          }) => {
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveUserIp(ip);
                  updateBackground(values);
                  navigate("/part1");
                }}
              >
                <Paper style={{ padding: 16 }}>
                  <Grid container alignItems="flex-start" spacing={1}>
                        <Grid item xs={12}>
                      <FormControl required component="fieldset">
                        <FormLabel component="legend">
                          <p className="background-title"> 成長背景：</p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="台灣"
                            control={
                              <Field
                                required
                                name="growup"
                                component={Radio}
                                type="radio"
                                value="台灣"
                              />
                            }
                          />
                          <FormControlLabel
                            label="香港"
                            control={
                              <Field
                                required
                                name="growup"
                                component={Radio}
                                type="radio"
                                value="香港"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid className="background-font">
                      <p className="background-title">年齡 : </p>
                    </Grid>
                    <Grid item xs={2}>
                      <Field
                        required
                        name="age"
                        component={TextField}
                        type="number"
                        // label="年齡 : "
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl required component="fieldset">
                        <FormLabel component="legend">
                          <p className="background-title"> 婚姻狀況：</p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="已婚"
                            control={
                              <Field
                                required
                                name="marriage"
                                component={Radio}
                                type="radio"
                                value="已婚"
                              />
                            }
                          />
                          <FormControlLabel
                            label="離婚/鰥寡"
                            control={
                              <Field
                                required
                                name="marriage"
                                component={Radio}
                                type="radio"
                                value="離婚/鰥寡"
                              />
                            }
                          />
                          <FormControlLabel
                            label="未婚"
                            control={
                              <Field
                                required
                                name="marriage"
                                component={Radio}
                                type="radio"
                                value="未婚"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl required component="fieldset">
                        <FormLabel component="legend">
                          <p className="background-title"> 教育程度 : </p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="沒有受過教育"
                            control={
                              <Field
                                required
                                name="education"
                                component={Radio}
                                type="radio"
                                value="沒有受過教育"
                              />
                            }
                          />
                          <FormControlLabel
                            label="小學"
                            control={
                              <Field
                                required
                                name="education"
                                component={Radio}
                                type="radio"
                                value="小學"
                              />
                            }
                          />
                          <FormControlLabel
                            label="初中"
                            control={
                              <Field
                                required
                                name="education"
                                component={Radio}
                                type="radio"
                                value="初中"
                              />
                            }
                          />
                          <FormControlLabel
                            label="高中"
                            control={
                              <Field
                                required
                                name="education"
                                component={Radio}
                                type="radio"
                                value="高中"
                              />
                            }
                          />
                          <FormControlLabel
                            label="大學/專科(文憑/副學士)"
                            control={
                              <Field
                                required
                                name="education"
                                component={Radio}
                                type="radio"
                                value="大學/專科(台灣)"
                              />
                            }
                          />
                          <FormControlLabel
                            label="研究所(碩士)以上"
                            control={
                              <Field
                                required
                                name="education"
                                component={Radio}
                                type="radio"
                                value="研究所以上"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid className="background-font">
                      <p className="background-title"> 育有子女人數：</p>
                    </Grid>
                    <Grid item xs={2}>
                      <Field
                        required
                        name="chirdrenNumber"
                        component={TextField}
                        type="number"
                      />
                    </Grid>
                    <Grid className="background-font">
                      <p className="background-title">最小的子女年齡:</p>
                    </Grid>
                    <Grid item xs={2}>
                      <Field
                        required
                        name="youngest"
                        component={TextField}
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset" required>
                        <FormLabel component="legend">
                          <p className="background-title"> 職業： </p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="農牧業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="農牧業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="製造業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="製造業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="工程業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="工程業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="批發及零售業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="批發及零售業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="運輸及倉儲業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="運輸及倉儲業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="住宿及餐飲業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="住宿及餐飲業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="出版影音及資通訊業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="出版影音及資通訊業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="金融及保險業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="金融及保險業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="不動產業(地產業)"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="不動產業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="專業、科學及技術服務業 "
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="專業、科學及技術服務業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="公共行政及國防(公務人員)"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="公共行政及國防"
                              />
                            }
                          />
                          <FormControlLabel
                            label="教育業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="教育業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="醫療保健及社會工作服務業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="醫療保健及社會工作服務業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="藝術、娛樂及休閒服務業"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="藝術、娛樂及休閒服務業"
                              />
                            }
                          />
                          <FormControlLabel
                            label="其他"
                            control={
                              <Field
                                required
                                name="occupation"
                                component={Radio}
                                type="radio"
                                value="other"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <div
                      style={{
                        display:
                          values.occupation === "other" ? "block" : "none",
                        color: "red",
                      }}
                    >
                      請註明其它職業
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          name="otherOccupation"
                          component={TextField}
                          type="text"
                        />
                      </Grid>
                    </div>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <p className="background-title">宗教： </p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="佛教"
                            control={
                              <Field
                                name="religion"
                                component={Radio}
                                type="radio"
                                value="佛教"
                              />
                            }
                          />
                          <FormControlLabel
                            label="道教"
                            control={
                              <Field
                                name="religion"
                                component={Radio}
                                type="radio"
                                value="道教"
                              />
                            }
                          />
                          <FormControlLabel
                            label="基督教"
                            control={
                              <Field
                                name="religion"
                                component={Radio}
                                type="radio"
                                value="基督教"
                              />
                            }
                          />
                          <FormControlLabel
                            label="伊斯蘭教"
                            control={
                              <Field
                                name="religion"
                                component={Radio}
                                type="radio"
                                value="伊斯蘭教"
                              />
                            }
                          />
                          <FormControlLabel
                            label="其它"
                            control={
                              <Field
                                name="religion"
                                component={Radio}
                                type="radio"
                                value="其它"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <p className="background-title"> 工作性質 : </p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="全職"
                            control={
                              <Field
                                required
                                name="jobType"
                                component={Radio}
                                type="radio"
                                value="全職"
                              />
                            }
                          />
                          <FormControlLabel
                            label="兼職"
                            control={
                              <Field
                                required
                                name="jobType"
                                component={Radio}
                                type="radio"
                                value="兼職"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <div
                      style={{
                        display: values.jobType === "兼職" ? "block" : "none",
                        color: "red",
                      }}
                    >
                      <Grid container alignItems="flex-start" spacing={1}>
                        <Grid item xs={12} className="background-font">
                          請註明兼職每週工作時數
                        </Grid>

                        <Grid item xs={2}>
                          <Field
                            fullWidth
                            name="workingHour"
                            component={TextField}
                            type="number"
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <Grid item xs={12} className="background-font">
                      <p className="background-title">
                        {" "}
                        個人收入佔家庭總入息比例(%) :
                      </p>
                    </Grid>
                    <Grid item xs={2}>
                      <Field
                        required
                        fullWidth
                        name="income"
                        component={TextField}
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <p className="background-title"> 聘請外傭 : </p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="有"
                            control={
                              <Field
                                name="hireServant"
                                component={Radio}
                                type="radio"
                                value="有"
                              />
                            }
                          />
                          <FormControlLabel
                            label="無"
                            control={
                              <Field
                                name="hireServant"
                                component={Radio}
                                type="radio"
                                value="無"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <p className="background-title"> 聘請鐘點清潔人員 </p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="有"
                            control={
                              <Field
                                name="ptServant"
                                component={Radio}
                                type="radio"
                                value="有"
                              />
                            }
                          />
                          <FormControlLabel
                            label="無"
                            control={
                              <Field
                                name="ptServant"
                                component={Radio}
                                type="radio"
                                value="無"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <div
                      style={{
                        display: values.ptServant === "有" ? "block" : "none",
                        color: "red",
                      }}
                      className="background-font"
                    >
                      請註明每週協助家務時數
                      <Grid item xs={4}>
                        <Field
                          fullWidth
                          name="ptWorkingHour"
                          component={TextField}
                          type="number"
                        />
                      </Grid>
                    </div>
                    <Grid item xs={12} className="background-font">
                      <p className="background-title">
                        {" "}
                        丈夫每週協助家事時數(如適用)(小時) :
                      </p>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        required
                        name="husbandHelp"
                        component={TextField}
                        type="number"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          <p className="background-title">
                            {" "}
                            填寫本問卷之地點 :{" "}
                          </p>
                        </FormLabel>
                        <RadioGroup row>
                          <FormControlLabel
                            label="家"
                            control={
                              <Field
                                required
                                name="place"
                                component={Radio}
                                type="radio"
                                value="家"
                              />
                            }
                          />
                          <FormControlLabel
                            label="工作場所"
                            control={
                              <Field
                                required
                                name="place"
                                component={Radio}
                                type="radio"
                                value="工作場所"
                              />
                            }
                          />
                          <FormControlLabel
                            label="其它"
                            control={
                              <Field
                                required
                                name="place"
                                component={Radio}
                                type="radio"
                                value="其它"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <div
                      style={{
                        display: values.place === "其它" ? "block" : "none",
                        color: "red",
                      }}
                    >
                      請註明其他填寫地點
                      <Grid item xs={12}>
                        <Field
                          fullWidth
                          name="otherPlace"
                          component={TextField}
                          type="text"
                        />
                      </Grid>
                    </div>

                    <Grid item xs={12} style={{ marginTop: 16 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={
                          values.age > 12 &&
                          values.chirdrenNumber >= 0 &&
                          values.youngest >= 0
                            ? false
                            : true
                        }
                      >
                        下一頁
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>

                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
              </form>
            );
          }}
        />
      </div>
      <div style={{ marginTop: "100px", height: "50px" }}></div>
    </div>
  );
}

export default connect(App);
