import React, { useEffect, useState } from "react";
import "../styles/app.css";
import fetchBeer from "../requests/fetchBeer";

import Beer from "./Beer";

const App = () => {
  const [beer, setBeer] = useState([]);

  const handleClick = () => {
    fetchBeer(setBeer);
  };

  useEffect(() => {
    fetchBeer(setBeer);
  }, []);

  return (
    <div className="app">
      <h1>Random beer generator</h1>
      <div className="app__title">{beer?.name}</div>
      <button value="random" onClick={handleClick}>
        Get a random beer
      </button>
      {beer && <Beer beer={beer} />}
    </div>
  );
};

export default App;
