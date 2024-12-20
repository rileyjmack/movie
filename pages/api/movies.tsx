// import pool from "./db";
// import { NextApiRequest, NextApiResponse } from "next";
// import { Movie } from "../../src/app/defintions";

// export async function fetchMovies() {
//   try {
//     // Artificially delay a response for demo purposes.
//     // Don't do this in production :)

//     // console.log('Fetching Actors data...');
//     // await new Promise((resolve) => setTimeout(resolve, 3000));

//     const data = await pool.query<Movie>(`SELECT * FROM movies`);

//     // console.log('Data fetch completed after 3 seconds.');

//     return data.rows;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch actors data.");
//   }
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const result = await pool.query<Actor>("SELECT * FROM actors");
//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }
