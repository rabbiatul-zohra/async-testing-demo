import React from "react";
import "../styles/beerlist.css";

import Beer from "./Beer";

const BeerList = () => {
  return (
    <div className="beerlist">
      Beerlist: Wrapper component to display list of beers
      <Beer />
      <Beer />
    </div>
  );
};

export default BeerList;
