import { db } from "@vercel/postgres";

const client = await db.connect();

async function listMovieActors() {
  const data = await client.sql`
     SELECT actors.name,actors.profile_path,movies.title,movies.popularity,movies.poster_path FROM actors JOIN movie_actors ON (actors.id=movie_actors.actor_id) JOIN movies ON (movies.id=movie_actors.movie_id) ORDER BY movies.popularity DESC
  `;

  return data.rows;
}

export async function GET() {
  try {
    return Response.json(await listMovieActors());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
