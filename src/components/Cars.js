import React from "react";
import Wrapper from "./Wrapper";

const Car = (props) => {
  return (
    <Wrapper>
      <p>Marque : {props.children}</p>
      <p>Couleur : {props.color}</p>
    </Wrapper>
  );
};

export default Car;
