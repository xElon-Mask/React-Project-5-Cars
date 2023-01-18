const Car = ({ color, children, year }) => {
  const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

  if (children) {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p>Marque: {children}</p>
        <p>Année: {year}</p>
        {colorInfo}
      </div>
    );
  }

  // return null // ce return est Facultatif
};

export default Car;
