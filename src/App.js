import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const userData = async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const usersdb = await response.json();
      setUsers(usersdb);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };
  const removeHandeler = (id) => {
    const listUser = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(listUser);
  };
  useEffect(() => {
    userData();
  }, []);
  if (users.length === 0) {
    return (
      <div className="title">
        <h1>List is empty</h1>
        <button type="button" className="btn" onClick={() => userData()}>
          Refresh
        </button>
      </div>
    );
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Tours users={users} removeHandeler={removeHandeler} />
    </div>
  );
}

export default App;
