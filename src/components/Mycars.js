import React, { Component } from "react";
import Car from "./Cars";
import Wrapper from "./Wrapper";
import MyHeader from "./MyHeader";

class Mycars extends Component {
  state = {
    cars: ["Nissan", "Volvo", "Tesla"],
  };
  render() {
    const { title, color } = this.props;
    return (
      <div>
        <Wrapper>
          <MyHeader myStyle={color}>{title}</MyHeader>
        </Wrapper>

        <Car color="Noire">{this.state.cars[0]}</Car>
        <Car color="Rouge">{this.state.cars[1]}</Car>
        <Car color="Bleue">{this.state.cars[2]}</Car>
      </div>
    );
  }
}

export default Mycars;
