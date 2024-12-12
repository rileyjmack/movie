//this is the access point for all things database related!
import db from "./db.js";

import Actor from "./models/Actor.js";

//associations could go here!
const models = {
  db,
  models: {
    Actor,
  },
};

export default models;
