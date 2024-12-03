export default async function Home() {
  const randomCeleb = 3;
  const API_KEY = process.env.API_KEY;
  // const data = await fetch(
  //   `https://api.themoviedb.org/3/person/${randomCeleb}?api_key=${API_KEY}`
  // );

  const movieData = await fetch(
    `https://api.themoviedb.org/3/person/${randomCeleb}/combined_credits?api_key=${API_KEY}`
  );
  // const person = await data.json();
  const movies = await movieData.json();
  const cast = movies.cast;
  cast.sort((a, b) => b.vote_count - a.vote_count);
  // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"

  return (
    <div>
      <div>
        {cast.length ? (
          cast
            .filter((movie) => movie.title)
            .filter((movie) => movie.vote_count > 1000)
            .map((movie) => (
              <li key={movie.id}>
                TITLE:{movie.title}
                VOTE COUNT:{movie.vote_count}
                ORDER:{movie.order}
              </li>
            ))
        ) : (
          <p>...loading</p>
        )}
      </div>
    </div>
  );
}
