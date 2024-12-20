import Sequelize from "sequelize";
import db from "../db.js";

const MovieActor = db.define("movieActor", {
  actorId: {
    type: Sequelize.INTEGER,
  },
  movieId: {
    type: Sequelize.INTEGER,
  },
});

export default MovieActor;
