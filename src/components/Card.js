import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt="react logo"></img>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
