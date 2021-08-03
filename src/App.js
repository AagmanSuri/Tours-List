import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  return (
    <div>
      <h1>Our Tours</h1>
      <Tours />
    </div>
  );
}

export default App;
