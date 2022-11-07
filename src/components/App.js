import React, { useEffect } from "react";
import "../styles/app.css";
import axios from "axios";

import BeerList from "./BeerList";

const App = () => {
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Server error: " + err));
  }, []);
  return (
    <div className="app">
      App
      <BeerList />
    </div>
  );
};

export default App;
