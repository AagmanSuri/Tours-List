import React from "react";
import Tour from "./Tour";
const Tours = ({ users, removeHandeler }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {users.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeHandeler={removeHandeler} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
