import { db } from "@vercel/postgres";

const client = await db.connect();

const actors: any[] = [];
const movieActors: any[] = [];
const movies: any[] = [];

async function seedActors() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS actors (
      id INT NOT NULL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      profile_path VARCHAR(255) NOT NULL,
    );
  `;

  const insertedActors = await Promise.all(
    actors.map(async (actor) => {
      return client.sql`
        INSERT INTO actors (id, name, profile_path)
        VALUES (${actor.id}, ${actor.name}, ${actor.profile_path})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedActors;
}

async function seedMovies() {
  let movieMemo = {};
  for (let actor of actors) {
    let actorMovieData = await fetch(
      `https://api.themoviedb.org/3/person/${actor.id}/movie_credits?&api_key=9a809c69db7007a0753a955ed630ed32`
    );
    let actorMovies = await actorMovieData.json();
    let topActorMovies = actorMovies.cast;
    topActorMovies.slice(0, 5);
    for (let movie of actorMovies.cast) {
      movieActors.push({
        actor_id: actor.id,
        movie_id: movie.id,
      });
      if (movieMemo[movie.id]) {
        continue;
      }
      movieMemo[movie.id] = 1;
      movies.push(movie);
    }
  }

  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS movies (
      id INT NOT NULL PRIMARY KEY,
      popularity INT NOT NULL,
      title VARCHAR(255) NOT NULL,
      poster_path VARCHAR(255)
    );
  `;

  const insertedMovies = await Promise.all(
    movies.map(
      (movie) => client.sql`
        INSERT INTO movies (id, title, popularity, poster_path)
        VALUES (${movie.id}, ${movie.title}, ${movie.popularity}, ${movie.poster_path})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedMovies;
}

async function seedMovieActors() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS MovieActors (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      actor_id INT NOT NULL,
      movie_id INT NOT NULL;
    );
  `;

  const insertedCustomers = await Promise.all(
    movieActors.map(
      (movieActor) => client.sql`
        INSERT INTO movieActors (id, actor_id, movie_id)
        VALUES (${movieActor.id}, ${movieActor.actor_id}, ${movieActor.movie_id})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCustomers;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedActors();
    await seedMovies();
    await seedMovieActors();

    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
