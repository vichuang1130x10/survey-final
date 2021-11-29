import React, { useEffect } from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import hero from "../../../hero.svg";
import { title } from "../../Text";
import Button from "../../Components/Button";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleOnClick = () => {
    navigate("/background");
  };
  return (
    <>
      <div className="container">
        <div className="landing-title">
          <h2>{title}</h2>
        </div>
        <div className="landing-page">
          <div className="landing-card order2">
            <p>您好：</p>
            <p className="para-style">
              這是一份有關台灣及香港在職母親的職業與家庭角色認同、以及情緒感受的問卷調查，問卷資料僅供學術研究之用，不會對外公開，敬請安心作答。填答時間約20~30分鐘；過程中，若感到不適或不想作答，可隨時中止作答。
            </p>
            <p>
              若您目前育有至少
              <u>
                <strong>一名12歲以下</strong>
              </u>
              的子女，且工作屬全職或兼職，我們誠摯邀請您填答此問卷。若您完成問卷填答，敬請於問卷最後留下電郵地址(email)，問卷收集結束後，將抽岀6位幸運兒，各得台幣1000元(1位)、500元(2位)、200元(3位)/之購物禮劵。
            </p>
            <Button onClick={() => handleOnClick()}>開 始 做 答</Button>
          </div>
          <div className="landing-card order1">
            <img src={hero} className="hero" alt="hero" />
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <p>東吳大學 心理學系</p>
          <p>臨床組研究生</p>
          <p>袁慧萍 敬上</p>
          <p>指導教授：曾幼 涵博士</p>
          <p>2021年11月</p>
          <p>聯絡電話：(886-) 0908 452 513 / 電郵：yuensiuping@gmail.com</p>
        </div>
      </footer>
    </>
  );
}
