import { Form, Field } from "react-final-form";
import React, { useEffect } from "react";
import { TextField } from "final-form-material-ui";
import { Paper, Grid, Button } from "@material-ui/core";
import connect from "./connect.js";
import Back from "../../Components/Back";
import { navigate } from "@reach/router";

function App({ saveEmail }) {
  // const handleOnclick = (email) => {
  //   saveEmail(email);
  // };
  const onSubmit = async (values) => {
    // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    // await sleep(300);
    // window.alert(JSON.stringify(values, 0, 2));
    saveEmail(values.email);
    navigate("/result");
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    return errors;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <Back className="return-icon" />
      <div className="part-i-title">
        <h2>謝謝</h2>
        <hr />
        <div className="text-area">
          <h3>
            感謝您完成本問卷，敬請留下電郵地址以作抽奬之用，抽岀之幸運兒將會以電郵聯絡領取購物禮劵
          </h3>
        </div>
      </div>

      <div className="self-content">
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={1}>
                  <Grid item xs={8}>
                    <Field
                      fullWidth
                      required
                      name="email"
                      component={TextField}
                      type="input"
                      label="Email : "
                    />
                  </Grid>

                  <Grid item xs={12} style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                      // onClick={() => handleOnclick(values.email)}
                    >
                      送出
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          )}
        />
      </div>
      <div style={{ marginTop: "100px", height: "50px" }}></div>
    </div>
  );
}

export default connect(App);
