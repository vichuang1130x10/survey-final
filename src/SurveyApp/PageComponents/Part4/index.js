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
        <h2>第4部份</h2>
        <hr />
        <div className="text-area">
          <h3>妳認為下列描述是否符合妳的實際情況？請選擇適當的數字(1-5)</h3>
          <h3>1 =非常不同意 2 =很少 3=普通 4 =同意 5 =非常同意</h3>
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
