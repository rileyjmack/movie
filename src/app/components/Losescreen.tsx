import React from "react";

const Losescreen = ({ chosenActor }) => {
  return (
    <div style={styles.container}>
      <div style={styles.container}>Sorry You Lose </div>
      <img
        // className="box2"
        style={styles.box}
        src={`https://image.tmdb.org/t/p/w500/${chosenActor.profile_path}`}
      />
      <div style={styles.container}>It's {chosenActor.name}</div>
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

const styles = {
  container: {
    display: "center", // Flexbox layout
    justifyContent: "space-around", // Optional: Adjust spacing between boxes
    alignItems: "center", // Align items vertically
    gap: "10px", // Space between boxes
    margin: "auto",
    width: "50%",
  },
  box: {
    // backgroundColor: "#0070f3",
    // color: "#fff"
    margin: "auto",
    width: "50%",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #000",
    borderRadius: "4px",
    flex: "1", // Optional: Makes boxes grow/shrink equally
    maxWidth: "250px", // Optional: Restrict the box width
  },
};

export default Losescreen;
