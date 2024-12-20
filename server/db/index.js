//this is the access point for all things database related!
import db from "./db.js";

import Actor from "./models/Actor.js";
import Movie from "./models/Movie.js";
import MovieActor from "./models/MovieActor.js";

//associations could go here!
const models = {
  db,
  models: {
    Actor,
    Movie,
    MovieActor,
  },
};

export default models;
