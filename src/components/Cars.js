import React from "react";

const Car = (props) => {
  return (
    <div className="cars">
      <p>Marque : {props.children}</p>
      <p>Couleur : {props.color}</p>
    </div>
  );
};

export default Car;
