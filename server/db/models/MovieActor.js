import Sequelize from "sequelize";
import db from "../db.js";

const Movieactor = db.define("movieactor", {
  actor_id: {
    type: Sequelize.INTEGER,
  },
  movie_id: {
    type: Sequelize.INTEGER,
  },
});

export default Movieactor;
