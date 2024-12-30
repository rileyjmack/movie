import Sequelize from "sequelize";
import db from "../db.js";

const Actor = db.define("actor", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.INTEGER,
  },
  known_for_department: {
    type: Sequelize.STRING,
  },
});

export default Actor;
