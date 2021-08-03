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
      console.log(usersdb);
      setUsers(usersdb);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };
  useEffect(() => {
    userData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>Our Tours</h1>
      <Tours users={users} />
    </div>
  );
}

export default App;
