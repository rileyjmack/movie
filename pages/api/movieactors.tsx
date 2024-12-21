import pool from "./db";
import { NextApiRequest, NextApiResponse } from "next";

export async function fetchMovieActors() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching Actors data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await pool.query(
      // `SELECT actors.name,movies.title
      //   FROM actors JOIN movieActors ON (actors.id=movieActors.actorId) JOIN movies ON (movies.id=movieActors.movieId)
      //   `
      "SELECT actor.name,movie.title FROM actor JOIN movieactor ON (actor.id=movieactor.actorId) JOIN movie ON (movie.id=movieactor.movieId"
    );

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch actors data.");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await pool.query(
      "SELECT actors.name,movies.title FROM actors JOIN movieactors ON (actors.id=movieactors.actor_id) JOIN movies ON (movies.id=movieactors.movie_id)"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
