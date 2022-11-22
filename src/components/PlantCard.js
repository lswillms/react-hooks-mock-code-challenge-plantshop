import React, { useState } from "react";

function PlantCard( {plant}) {

  const [ sold, setSold] = useState(true)

  function hanbdleSoldOut() {
    setSold((sold) => !sold)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {sold? (
        <button onClick = {hanbdleSoldOut} className="primary">In Stock</button>
      ) : (
        <button onClick = {hanbdleSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
