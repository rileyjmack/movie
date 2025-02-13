import React from "react";
import PlayAgainButton from "./PlayAgainButton";
import Stars from "./Stars";

const Winscreen = ({ chosenActor, guesses }) => {
  console.log(guesses, guesses == 4);
  const handlePlayAgain = () => {
    // Reset the game state or perform other actions
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="sub_container">
        <div className="title_text_large">Correct, You Win! </div>
        <div className="sub_container">
          <div className="title_text">It&apos;s {chosenActor.name}</div>
          <img
            className="box2"
            src={`https://image.tmdb.org/t/p/w500/${chosenActor.profile_path}`}
          />
        </div>
        {guesses == 4 ? (
          <p className="title_text">You Earned 1 Star!</p>
        ) : (
          <p className="title_text">You Earned {5 - guesses} Stars!</p>
        )}
      </div>
      <Stars guesses={guesses} />
      <div className="button-container">
        <PlayAgainButton size={1} onClick={handlePlayAgain} />
      </div>
    </div>
  );
};

export default Winscreen;
