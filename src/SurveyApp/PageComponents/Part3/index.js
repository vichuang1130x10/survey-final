import { Paper } from "@material-ui/core";
import Scroll from "react-scroll";
import Back from "../../Components/Back";
import { navigate } from "@reach/router";

function App() {
  Scroll.animateScroll.scrollToTop();

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
          <h3>1 =從來沒有 2 =很少 3=普通 4 =稍微多次 5 =經常</h3>
        </div>
      </div>

      <div className="self-content">
        <Paper style={{ padding: "20px" }}></Paper>
        <div className="next-button">
          {/* <button onClick={() => handlePart2Next()}>下一步</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
