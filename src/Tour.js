import React, { useState } from "react";

const Tour = ({ id, name, info, price, image }) => {
  return (
    <div>
      <img src={image} alt="img"></img>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{info}</p>
      <button>Not Interested</button>
    </div>
  );
};

export default Tour;
