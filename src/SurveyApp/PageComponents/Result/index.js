import React, { useEffect,useState } from "react";
import { Paper } from "@material-ui/core";
import connect from "./connect";

import thank from "../../../thank.jpeg";

import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";



function App({ appState ,isDataSend,setIsDataSend}) {


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

    await addDoc(reportsCollectionRef, { survey: jsonObj,time:Date.now()});
    setIsDataSend(true)
  };
  useEffect(() => {
    window.scrollTo(0, 0);
       if(isDataSend !== true){
            createReport();
       }
  
  }, []);

  return (
    <div className="landing-vh">
      <div className="container">
        <div className="landing-title">
          <h2>本問卷已經全數完成，感謝妳的細心作答</h2>
        </div>

        <div className="result-hero">
          <img src={thank} className="hero" alt="thankphoto" />
        </div>
      </div>
    </div>
  );
}

export default connect(App);
