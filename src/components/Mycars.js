import React, { Component } from "react";
import Car from "./Cars";
//import Wrapper from "./Wrapper";
//import MyHeader from "./MyHeader";

class Mycars extends Component {
  state = {
    cars: ["Nissan", "Volvo", "Tesla"],
  };

  noCopy = () => {
    alert("Je vous avais prévenu !");
  };

  addStyle = (e) => {
    if (e.target.classList.contains("styled")) {
      e.target.classList.remove("styled");
    } else {
      e.target.classList.add("styled");
    }
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <h1 onMouseOver={this.addStyle}>{title}</h1>
        <p onCopy={this.noCopy}>
          Ceci est un paragraphe qu'il ne faut surtout pas copier
        </p>
        <Car color="Noire">{this.state.cars[0]}</Car>
        <Car color="Rouge">{this.state.cars[1]}</Car>
        <Car color="Bleue">{this.state.cars[2]}</Car>
      </div>
    );
  }
}

export default Mycars;
