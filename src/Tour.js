import React, { useState } from "react";

const Tour = ({ id, name, info, price, image, removeHandeler }) => {
  const [readMore, setReadMore] = useState(true);
  const [ShowDetails, setShowDetails] = useState("Show less");
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              if (readMore) {
                setShowDetails("Show More");
                setReadMore(!readMore);
              } else {
                setShowDetails("Show Less");
                setReadMore(!readMore);
              }
            }}
          >
            {ShowDetails}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeHandeler(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
