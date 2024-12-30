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

const fetchImage = async () => {
  try {
    const res = await fetch(
      "https://image.tmdb.org/t/p/original/wt2TRBmFmBn5M5MBcPTwovlREaB.jpg"
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    return imageObjectURL;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: "Data could not be loaded" }; // Fallback data
  }
};

export default async function Home() {
  const actors = await fetchActors();
  const movies = await fetchMovies();
  const movieactors = await fetchMovieactors();
  const imageSource = await fetchImage();

  return (
    <div>
      <App
        actors={actors}
        movies={movies}
        movieactors={movieactors}
        imageSource={imageSource}
      />
    </div>
  );
}
