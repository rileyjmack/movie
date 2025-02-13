import React from "react";

const Stars = (guesses) => {
  return (
    <div className="star_container">
      {Array.from({ length: 6 - guesses.guesses }).map((_, index) => (
        <div className="starGood" key={index}></div>
      ))}
      {Array.from({ length: guesses.guesses - 1 }).map((_, index) => (
        <div className="starMiss" key={index}></div>
      ))}
    </div>
  );
};

export default Stars;
