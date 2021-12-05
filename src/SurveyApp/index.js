import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./data/createStore";
import Header from "./Components/Header";
import Landing from "./PageComponents/Landing";
import Background from "./PageComponents/Background";
import Part1 from "./PageComponents/Part1";
import Part1SelfEva from "./PageComponents/Part1SelfEva";
import Part2 from "./PageComponents/Part2";
import Part3 from "./PageComponents/Part3";
import Part4 from "./PageComponents/Part4";
import Finish from "./PageComponents/Finish";
import Result from "./PageComponents/Result";

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />
        <Router>
          <Landing path="/" />
          <Background path="/background" />
          <Part1 path="/part1" />
          <Part1SelfEva path="/part1-self-evaluation" />
          <Part2 path="/part2" />
          <Part3 path="/part3" />
          <Part4 path="/part4" />
          <Finish path="/finish" />
          <Result path="/result" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
