import React, { useEffect, useState } from "react";
import "../styles/app.css";
import axios from "axios";

import BeerList from "./BeerList";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [useDarkTheme, setUseDarkTheme] = useState(true);

  const handleToggle = () => {
    setUseDarkTheme((prev) => !prev);
  };

  const handleClick = (e) => {
    let query = "https://api.punkapi.com/v2/beers/";
    if (e.target.value !== "all") {
      query += e.target.value;
    }

    axios
      .get(query)
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => console.log("Server error: " + err));
  };

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => {
        console.log(res.data);
        setBeers(res.data);
      })
      .catch((err) => console.log("Server error: " + err));
  }, []);

  return (
    <div className={`app ${useDarkTheme ? "app--dark" : "app--light"}`}>
      App: {beers[0]?.name}
      <button value="all" onClick={handleClick}>
        Get ALL beers
      </button>
      <button value="random" onClick={handleClick}>
        Get a random beer
      </button>
      <button onClick={handleToggle}>Switch theme</button>
      {beers && <BeerList beers={beers} />}
    </div>
  );
};

export default App;
