import { Router } from "@reach/router";
import { Provider } from "react-redux";
import Header from "./Components/Header";
import Landing from "./PageComponents/Landing";
import Background from "./PageComponents/Background";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Landing path="/" />
        <Background path="/background" />
      </Router>
    </div>
  );
}

export default App;
