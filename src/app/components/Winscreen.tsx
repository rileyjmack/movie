import React from "react";

const Winscreen = ({ chosenActor }) => {
  return (
    <div styles={styles.container}>
      <p>CORRECT YOU WIN</p>
      <img
        styles={styles.box}
        className="box2"
        src={`https://image.tmdb.org/t/p/w500/${chosenActor.profile_path}`}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex", // Flexbox layout
    justifyContent: "space-around", // Optional: Adjust spacing between boxes
    alignItems: "center", // Align items vertically
    gap: "10px", // Space between boxes
  },
  box: {
    // backgroundColor: "#0070f3",
    // color: "#fff",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #000",
    borderRadius: "4px",
    flex: "1", // Optional: Makes boxes grow/shrink equally
    maxWidth: "150px", // Optional: Restrict the box width
  },
};

export default Winscreen;
