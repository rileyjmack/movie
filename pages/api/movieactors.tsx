import pool from "./db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await pool.query(
      "SELECT actors.name,actors.profile_path,movies.title,movies.popularity,movies.poster_path FROM actors JOIN movieactors ON (actors.id=movieactors.actor_id) JOIN movies ON (movies.id=movieactors.movie_id) ORDER BY movies.popularity DESC"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
