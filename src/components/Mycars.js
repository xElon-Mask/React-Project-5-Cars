import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <Car color="Noire">Mercedes</Car>
        <Car color="Rouge">Tesla</Car>
        <Car color="Bleue">BMW</Car>
      </div>
    );
  }
}

export default Mycars;
