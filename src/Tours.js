import React from "react";
import Tour from "./Tour";
const Tours = ({ users }) => {
  const notInterestedHandeler = (id) => {
    console.log(id);
  };
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Tour
              id={user.id}
              image={user.image}
              name={user.name}
              info={user.info}
              price={user.price}
              notInterestedHandeler={notInterestedHandeler(user.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
