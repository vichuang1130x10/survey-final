import { navigate } from "@reach/router";
import { Form, Field } from "react-final-form";

import { TextField, Radio, Input } from "final-form-material-ui";
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

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = (values) => {
  const errors = {};
  if (!values.age) {
    errors.age = "Required";
  }

  if (values.age <= 12) {
    errors.age = "請再次確認年齡";
  }

  if (values.chirdrenNumber < 0) {
    errors.chirdrenNumber = "Wrong Value";
  }

  if (values.youngest <= 0) {
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
function App({ resetState, updateBackground }) {
  React.useEffect(() => {
    resetState();
    window.scrollTo(0, 0);
  }, []);

  const handleOnclick = (v) => {
    updateBackground(v);
    navigate("/part1");
  };
  return (
    <div className="container">
      <div className="landing-title">
        <h2>{title}</h2>
      </div>
      <div className="background-page">
        <h2 style={{ marginBottom: "20px" }}>背景資料</h2>
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={1}>
                  <Grid item xs={2}>
                    <Field
                      required
                      name="age"
                      component={TextField}
                      type="number"
                      label="年齡 : "
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl required component="fieldset">
                      <FormLabel component="legend">婚姻狀況：</FormLabel>
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
                    <FormControl component="fieldset">
                      <FormLabel component="legend">教育程度 : </FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          label="沒有受過教育"
                          control={
                            <Field
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
                              name="education"
                              component={Radio}
                              type="radio"
                              value="高中"
                            />
                          }
                        />
                        <FormControlLabel
                          label="大學/專科(台灣)"
                          control={
                            <Field
                              name="education"
                              component={Radio}
                              type="radio"
                              value="大學/專科(台灣)"
                            />
                          }
                        />
                        <FormControlLabel
                          label="研究所以上"
                          control={
                            <Field
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
                  <Grid>育有子女人數：</Grid>
                  <Grid item xs={2}>
                    <Field
                      required
                      name="chirdrenNumber"
                      component={TextField}
                      type="number"
                    />
                  </Grid>
                  <Grid>最小的子女年齡</Grid>
                  <Grid item xs={2}>
                    <Field
                      required
                      name="youngest"
                      component={TextField}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">職業： </FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          label="農牧業"
                          control={
                            <Field
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
                              name="occupation"
                              component={Radio}
                              type="radio"
                              value="金融及保險業"
                            />
                          }
                        />
                        <FormControlLabel
                          label="不動產業"
                          control={
                            <Field
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
                              name="occupation"
                              component={Radio}
                              type="radio"
                              value="專業、科學及技術服務業"
                            />
                          }
                        />
                        <FormControlLabel
                          label="公共行政及國防"
                          control={
                            <Field
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
                      display: values.occupation === "other" ? "block" : "none",
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
                      <FormLabel component="legend">宗教： </FormLabel>
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
                      <FormLabel component="legend">工作性質 : </FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          label="全職"
                          control={
                            <Field
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
                      <Grid item xs={12}>
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
                  <Grid item xs={12}>
                    個人收入佔家庭總入息比例(%) :
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
                      <FormLabel component="legend">聘請外傭 : </FormLabel>
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
                        聘請鐘點清潔人員 :{" "}
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
                  <Grid>丈夫每週協助家事時數(如適用)(小時) : </Grid>
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
                        填寫本問卷之地點 :{" "}
                      </FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          label="家"
                          control={
                            <Field
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
                      disabled={submitting}
                      onClick={() => handleOnclick(values)}
                    >
                      下一頁
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </div>
      <div style={{ marginTop: "100px", height: "50px" }}></div>
    </div>
  );
}

export default connect(App);
