import { Component } from "react";
import Mycars from "./components/Mycars";
import Cars from "./components/Cars";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mycars />
        <Cars />
      </div>
    );
  }
}

export default App;
