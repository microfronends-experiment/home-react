import React from "react";
import Card from "./Card";

const Cards = ({ count }) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <Card
        title={"Card " + i}
        description={"this is description for card " + i}
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        key={i}
      />
    );
  }
  return cards.length > 0 && <div className="Cards">{cards}</div>;
};

export default Cards;
