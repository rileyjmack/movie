"use strict";

import models from "../server/db/index.js";

const API_KEY = process.env.API_KEY;

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  console.log("api", API_KEY);
  await models.db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced... (may take a minute)");

  // get top 20 artists
  const topActorsData = await fetch(
    `https://api.themoviedb.org/3/person/popular?&api_key=${API_KEY}`
  );
  const topActors = await topActorsData.json();
  // const person = await data.json();

  // map the top 20 artist to an array of just their names
  const top20Actors = topActors.results.slice(0, 20);
  for (const actor of top20Actors) {
    await models.models.Actor.create(actor);
  }

  // map the top 5 albums to an array of just the album titles

  // Creating Users

  // Create Admin User

  // Creating Orders

  // Order Items

  console.log(`seeded movie successfully!!!`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection...");
    await models.db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
runSeed();

console.log("hi");

// we export the seed function for testing purposes (see `./seed.spec.js`)
export default seed;
