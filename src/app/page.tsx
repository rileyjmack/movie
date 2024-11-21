export default async function Home() {
  const API_KEY = process.env.API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}`
  );
  const posts = await data.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <li>HELLO{posts.belongs_to_collection.id}</li>
    </div>
  );
}
