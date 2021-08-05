import React, { useState } from "react";

const Tour = ({ id, name, info, price, image, notInterestedHandeler }) => {
  return (
    <div>
      <img style={{ height: "2rem" }} src={image} alt="img"></img>
      <h2>{name}</h2>
      <p className="tour-price">${price}</p>
      <p>{info}</p>
      <button className="btn" onClick={() => notInterestedHandeler(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
