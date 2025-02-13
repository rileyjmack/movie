import React from "react";
import PlayAgainButton from "./PlayAgainButton";
import Stars from "./Stars";

const Losescreen = ({ chosenActor }) => {
  const handlePlayAgain = () => {
    // Reset the game state or perform other actions
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="sub_container">
        <div className="title_text_large">Sorry You Lose </div>
        <div className="sub_container">
          <div className="title_text">It&apos;s {chosenActor.name}</div>

          <img
            className="box2"
            src={`https://image.tmdb.org/t/p/w500/${chosenActor.profile_path}`}
          />
        </div>
        <p className="title_text">You Earned 0 Stars</p>
      </div>
      <Stars guesses={6} />
      <div className="button-container">
        <PlayAgainButton size={1} onClick={handlePlayAgain} />
      </div>
    </div>
  );
};

{
  /* <div>
  <div>MOVIE {boxid++}</div>
  <img
    className="box2"
    style={styles.box}
    src={`https://image.tmdb.org/t/p/w500/${actor.poster_path}`}
  />
  <p key={actor.id}>{actor.title}</p>
</div>; */
}

export default Losescreen;
