import Sequelize from "sequelize";
import db from "../db.js";

const Actor = db.define("actor", {
  name: {
    type: Sequelize.STRING,
  },
});

export default Actor;
