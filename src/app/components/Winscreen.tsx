import React from "react";
import PlayAgainButton from "./PlayAgainButton";

const Winscreen = ({ chosenActor }) => {
  const handlePlayAgain = () => {
    // Reset the game state or perform other actions
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="sub_container">
        <div className="title_text_large">Correct, You Win! </div>
        <div className="sub_container">
          <img
            className="box2"
            src={`https://image.tmdb.org/t/p/w500/${chosenActor.profile_path}`}
          />
          <div className="title_text">It&apos;s {chosenActor.name}</div>
        </div>
      </div>
      <div className="button-container">
        <PlayAgainButton size={1} onClick={handlePlayAgain} />
      </div>
    </div>
  );
};

export default Winscreen;
