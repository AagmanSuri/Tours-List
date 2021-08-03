import React from "react";
import Tour from "./Tour";
const Tours = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <Tour
              id={user.id}
              image={user.image}
              name={user.name}
              info={user.info}
              price={user.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
