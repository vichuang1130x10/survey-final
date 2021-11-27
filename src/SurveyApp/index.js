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

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Landing path="/" />
        <Background path="/background" />
        <Part1 path="/part1" />
        <Part1SelfEva path="/part1-self-evaluation" />
        <Part2 path="/part2" />
        <Part3 path="/part3" />
        <Part4 path="/part4" />
      </Router>
    </Provider>
  );
}

export default App;
