import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      {
        name: "Ford",
        color: "red",
        year: 2000,
      },
      {
        name: "Mercedes",
        color: "black",
        year: 2010,
      },
      {
        name: "Peugeot",
        color: "green",
        year: 2018,
      },
    ],
    titre: "Mon catalogue de Voitures 2",
  };

  addTenYears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
      updatedState,
    });
  };

  render() {
    const yearEnCours = new Date().getFullYear();
    return (
      <div>
        <h1>{this.state.titre}</h1>

        <button onClick={this.addTenYears}>+10 ans</button>

        <Car
          color={this.state.voitures[0].color}
          year={yearEnCours - this.state.voitures[0].year + "ans"}
        >
          {this.state.voitures[0].name}
        </Car>
        <Car
          color={this.state.voitures[1].color}
          year={yearEnCours - this.state.voitures[1].year + "ans"}
        >
          {this.state.voitures[1].name}
        </Car>
        <Car
          color={this.state.voitures[2].color}
          year={yearEnCours - this.state.voitures[2].year + "ans"}
        >
          {this.state.voitures[2].name}
        </Car>

        {this.state.voitures.map((voiture, index) => {
          return (
            <Car
              key={index}
              color={voiture.color}
              year={yearEnCours - voiture.year + " ans"}
            >
              {voiture.name}
            </Car>
          );
        })}
      </div>
    );
  }
}

export default Mycars;
