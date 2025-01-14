import React from "react";
import PlayAgainButton from "./PlayAgainButton";

const Winscreen = ({ chosenActor }) => {
  const handlePlayAgain = () => {
    // Reset the game state or perform other actions
    window.location.reload();
  };
  return (
    <div>
      <div className="container">
        <div className="container">Correct, You Win! </div>
        <img
          className="box2"
          src={`https://image.tmdb.org/t/p/w500/${chosenActor.profile_path}`}
        />
        <div className="container">It&apos;s {chosenActor.name}</div>
      </div>
      <PlayAgainButton size={1} onClick={handlePlayAgain} />
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

export default Winscreen;
