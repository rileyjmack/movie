import { db, sql } from "@vercel/postgres";
const client = await db.connect();

export async function fetchActors() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await client.sql`SELECT * FROM actors`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch actors data.");
  }
}

export async function fetchMovies() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await client.sql`SELECT * FROM movies`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch movie data.");
  }
}

export async function fetchMovieActors() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await client.sql`
     SELECT actors.name,actors.profile_path,movies.title,movies.popularity,movies.poster_path FROM actors JOIN movie_actors ON (actors.id=movie_actors.actor_id) JOIN movies ON (movies.id=movie_actors.movie_id) ORDER BY movies.popularity DESC
  `;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch movieActor data.");
  }
}
