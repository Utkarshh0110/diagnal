import React from "react";

const Cards = ({ item }) => {
  const missingImage = item["poster-image"] === "posterthatismissing.jpg";
  const url = `https://test.create.diagnal.com/images/${
    missingImage ? "placeholder_for_missing_posters.png" : item["poster-image"]
  }`;
  return (
    <div className="divContainer">
      <img className="images" src={`${url}`} />
      <div className="heading">{item.name}</div>
    </div>
  );
};

export default Cards;
