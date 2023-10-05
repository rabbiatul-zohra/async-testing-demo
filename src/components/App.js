import React, { useEffect, useState } from "react";
import "../styles/app.css";
import axios from "axios";

import Beer from "./Beer";

const App = () => {
  const [beer, setBeer] = useState([]);

  const handleClick = (e) => {
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then((res) => {
        setBeer(res.data[0]);
      })
      .catch((err) => console.log("Server error: " + err));
  };

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then((res) => {
        console.log(res);
        setBeer(res.data[0]);
      })
      .catch((err) => console.log("Server error: " + err));
  }, []);

  return (
    <div className='app'>
      <h1>Random beer generator</h1>
      <div className='app__title'>{beer?.name}</div>
      <button value='random' onClick={handleClick}>
        Get a random beer
      </button>
      {beer && <Beer beer={beer} />}
    </div>
  );
};

export default App;
