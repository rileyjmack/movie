import React from "react";

const Stars = (guesses) => {
  return (
    <div className="star_container">
      {Array.from({ length: 5 - guesses.guesses }).map((_, index) => (
        <div className="starGood" key={index}></div>
      ))}
      {Array.from({ length: guesses.guesses }).map((_, index) => (
        <div className="starMiss" key={index}></div>
      ))}
    </div>
  );
};

export default Stars;
