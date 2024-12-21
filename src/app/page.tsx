import App from "./components/App";

// export async function getServerSideProps(context) {
//   const { params, query, req, res } = context;

//   console.log("Route params:", params);
//   console.log("Query params:", query);
//   console.log("Query params:", req);
//   console.log("Query params:", res);
//   let actors = handler(req, res);
//   return { props: { actors } };
// }

async function fetchActors() {
  try {
    const res = await fetch("http://localhost:3000/api/actors");
    const actors = res.json();
    return actors;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: "Data could not be loaded" }; // Fallback data
  }
}

async function fetchMovies() {
  try {
    const res = await fetch("http://localhost:3000/api/movies");
    const movies = res.json();
    return movies;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: "Data could not be loaded" }; // Fallback data
  }
}

async function fetchMovieactors() {
  try {
    const res = await fetch("http://localhost:3000/api/movieactors");
    const actors = res.json();
    return actors;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: "Data could not be loaded" }; // Fallback data
  }
}

export default async function Home() {
  const actors = await fetchActors();
  const movies = await fetchMovies();
  const movieactors = await fetchMovieactors();

  return (
    <div>
      <App actors={actors} movies={movies} movieactors={movieactors} />
    </div>
  );
}
