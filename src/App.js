import { Component } from "react";
import Mycars from "./components/Mycars";
import "./App.css";

class App extends Component {
  state = {
    titre: "Mon catalogue de Voitures",
    color: "green",
  };

  changeTitle = (e) => {
    console.log(e.target);
    this.setState({
      titre: "Titre MAJ grâce à la méthode setState",
    });
  };

  changeViaParam = (titre) => {
    this.setState({
      titre: titre,
    });
  };

  changeViaBind = (param) => {
    this.setState({
      titre: param,
    });
  };

  render() {
    return (
      <div className="App">
        <Mycars color={this.state.color} title={this.state.titre} />

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam("I love Tesla")}>
          Regarde ma seedphrase
        </button>
        <button
          onClick={this.changeViaBind.bind(
            this,
            "Le titre est changée grâce à la méthode bind"
          )}
        >
          Surprise
        </button>
      </div>
    );
  }
}

export default App;
