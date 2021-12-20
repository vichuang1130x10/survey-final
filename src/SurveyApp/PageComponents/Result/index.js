import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import connect from "./connect";

import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

function App({ appState }) {
  const reportsCollectionRef = collection(db, "reports");
  const createReport = async () => {
    const {
      ip,
      background,
      email,
      part1SelectedChars,
      part2AAnswer,
      part2BAnswer,
      part3Answer,
      part4Answer,
    } = appState;
    const jsonObj = JSON.stringify({
      ip,
      background,
      email,
      part1SelectedChars,
      part2AAnswer,
      part2BAnswer,
      part3Answer,
      part4Answer,
    });

    await addDoc(reportsCollectionRef, { survey: jsonObj });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    createReport();
  }, []);

  return (
    <div className="landing-vh">
      <div className="container">
        <div className="landing-title">
          <h2>結果</h2>
        </div>
        <Paper>
          <pre>{JSON.stringify(appState, 0, 2)}</pre>
        </Paper>
      </div>
    </div>
  );
}

export default connect(App);
