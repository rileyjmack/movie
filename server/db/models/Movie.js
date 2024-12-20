import Sequelize from "sequelize";
import db from "../db.js";

const Movie = db.define("movie", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  popularity: {
    type: Sequelize.FLOAT,
  },
  original_language: {
    type: Sequelize.STRING,
  },
});

export default Movie;
