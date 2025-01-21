import React from "react";
import PlayAgainButton from "./PlayAgainButton";

const Losescreen = ({ chosenActor }) => {
  const handlePlayAgain = () => {
    // Reset the game state or perform other actions
    window.location.reload();
  };

  return (
    <div className="button-container">
      <div className="container">
        <div className="container">Sorry You Lose </div>
        <img
          className="box2"
          src={`https://image.tmdb.org/t/p/w500/${chosenActor.profile_path}`}
        />
        <div className="container">It&apos;s {chosenActor.name}</div>
      </div>
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
