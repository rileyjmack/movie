import React from "react";

const Winscreen = ({ chosenActor }) => {
  return (
    <div className="container">
      <div className="container">Correct, You Win! </div>
      <img
        className="box2"
        src={`https://image.tmdb.org/t/p/w500/${chosenActor.profile_path}`}
      />
      <div className="container">It&apos;s {chosenActor.name}</div>
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
