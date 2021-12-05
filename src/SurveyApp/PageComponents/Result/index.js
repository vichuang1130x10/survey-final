import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import connect from "./connect";

function App({ appState }) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
