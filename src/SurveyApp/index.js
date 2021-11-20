import { Router } from "@reach/router";
import { Provider } from "react-redux";
import Header from "./Components/Header";
import Landing from "./PageComponents/Landing";
import Background from "./PageComponents/Background";
import PartI from "./PageComponents/PartI";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Landing path="/" />
        <Background path="/background" />
        <PartI path="/partI" />
      </Router>
    </div>
  );
}

export default App;
