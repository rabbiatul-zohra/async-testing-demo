import React from "react";
import "../styles/beer.css";

const Beer = ({ beer }) => {
  return (
    <div className="beer">
      <div>Name: {beer.name}</div>
      <div>Tagline: {beer.tagline}</div>
      <div className="beer__image-wrap">
        <img className="beer__image" alt={beer.name} src={beer.image_url} />
      </div>
    </div>
  );
};

export default Beer;
