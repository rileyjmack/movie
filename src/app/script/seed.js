"use strict";
"eslint-disable-next-line @typescript-eslint/no-explicit-any";

import models from "../../../server/db/index.js";

// const API_KEY = process.env.API_KEY;

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await models.db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced... (may take a minute)");

  // get top 20 actors
  // const topActorsData = await fetch(
  //   `https://api.themoviedb.org/3/person/popular?&api_key=9a809c69db7007a0753a955ed630ed32`
  // );
  // const topActors = await topActorsData.json();
  const actors = [];
  for (let i = 1; i < 100000; i++) {
    const actorData = await fetch(
      `https://api.themoviedb.org/3/person/${i}?&api_key=9a809c69db7007a0753a955ed630ed32`
    );
    const person = await actorData.json();

    if (
      person.known_for_department == "Acting" &&
      person.popularity > 25 &&
      !person.adult
    ) {
      actors.push(person);
    }
  }
  for (let person of actors) {
    await models.models.Actor.create(person);
  }

  // map the top 20 actors to an array of just their names
  let movieMemo = {};
  for (let actor of actors) {
    let actorMovieData = await fetch(
      `https://api.themoviedb.org/3/person/${actor.id}/movie_credits?&api_key=9a809c69db7007a0753a955ed630ed32`
    );
    let actorMovies = await actorMovieData.json();
    let topActorMovies = actorMovies.cast;
    topActorMovies.slice(0, 5);
    for (let movie of actorMovies.cast) {
      await models.models.Movieactor.create({
        actor_id: actor.id,
        movie_id: movie.id,
      });
      if (movieMemo[movie.id]) {
        continue;
      }
      movieMemo[movie.id] = 1;
      await models.models.Movie.create(movie);
    }
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

// import { db } from "@vercel/postgres";

// const client = await db.connect();

// const actors: any[] = [];
// const movieActors: any[] = [];
// const movies: any[] = [];

// async function seedActors() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS actors (
//       id INT NOT NULL PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       profile_path VARCHAR(255) NOT NULL,
//     );
//   `;

//   const insertedActors = await Promise.all(
//     actors.map(async (actor) => {
//       return client.sql`
//         INSERT INTO actors (id, name, profile_path)
//         VALUES (${actor.id}, ${actor.name}, ${actor.profile_path})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedActors;
// }

// async function seedMovies() {
//   let movieMemo = {};
//   for (let actor of actors) {
//     let actorMovieData = await fetch(
//       `https://api.themoviedb.org/3/person/${actor.id}/movie_credits?&api_key=9a809c69db7007a0753a955ed630ed32`
//     );
//     let actorMovies = await actorMovieData.json();
//     let topActorMovies = actorMovies.cast;
//     topActorMovies.slice(0, 5);
//     for (let movie of actorMovies.cast) {
//       movieActors.push({
//         actor_id: actor.id,
//         movie_id: movie.id,
//       });
//       if (movieMemo[movie.id]) {
//         continue;
//       }
//       movieMemo[movie.id] = 1;
//       movies.push(movie);
//     }
//   }

//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS movies (
//       id INT NOT NULL PRIMARY KEY,
//       popularity INT NOT NULL,
//       title VARCHAR(255) NOT NULL,
//       poster_path VARCHAR(255)
//     );
//   `;

//   const insertedMovies = await Promise.all(
//     movies.map(
//       (movie) => client.sql`
//         INSERT INTO movies (id, title, popularity, poster_path)
//         VALUES (${movie.id}, ${movie.title}, ${movie.popularity}, ${movie.poster_path})
//         ON CONFLICT (id) DO NOTHING;
//       `
//     )
//   );

//   return insertedMovies;
// }

// async function seedMovieActors() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS MovieActors (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       actor_id INT NOT NULL,
//       movie_id INT NOT NULL;
//     );
//   `;

//   const insertedCustomers = await Promise.all(
//     movieActors.map(
//       (movieActor) => client.sql`
//         INSERT INTO movieActors (id, actor_id, movie_id)
//         VALUES (${movieActor.id}, ${movieActor.actor_id}, ${movieActor.movie_id})
//         ON CONFLICT (id) DO NOTHING;
//       `
//     )
//   );

//   return insertedCustomers;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedActors();
//     await seedMovies();
//     await seedMovieActors();

//     await client.sql`COMMIT`;

//     return Response.json({ message: "Database seeded successfully" });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
