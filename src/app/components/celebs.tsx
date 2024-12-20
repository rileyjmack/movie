// pages/index.js
// import { useState, useEffect } from "react";
// import { Actor } from "../defintions";
// import { fetchActors } from "../../../pages/api/actors";
// import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

// const profiles = [
//   { id: "1", name: "Allie Grater" },
//   { id: "2", name: "Aida Bugg" },
//   { id: "3", name: "Gabrielle" },
//   { id: "4", name: "Grace" },
//   { id: "5", name: "Hannah" },
//   { id: "6", name: "Heather" },
//   { id: "7", name: "John Doe" },
//   { id: "8", name: "Anne Teak" },
//   { id: "9", name: "Audie Yose" },
//   { id: "10", name: "Addie Minstra" },
//   { id: "11", name: "Anne Ortha" },
// ];

// export const getServerSideProps = async () => {
//   // Fetch data from external API
//   const actors = await fetchActors();
//   // Pass data to the page via props
//   return { props: { actors } };
// };

// interface Props<T> {
//   results?: T[];
//   onChange?: React.ChangeEventHandler;
//   renderItem(item: T): JSX.Element;
//   onSelect?: (item: T) => void;
//   value?: string;
// }

// export const SearchInput = <T extends object>({
//   results = [],
//   onChange,
//   renderItem,
//   onSelect,
//   value,
// }: Props<T>): JSX.Element =>

export default async function Celebs({ actors }) {
  // const [actors, setActors] = useState([]);

  // const fetchActors = () => {
  //   return async () => {
  //     try {
  //       const data = await fetch("/api/actors");
  //       setActors(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // };

  // useEffect(() => {
  //   setActors(fetchActors());
  //   console.log(fetchActors());
  // }, []);
  console.log(actors);
  return (
    <div>
      <h1>actors</h1>
      <ul>
        {actors
          .filter((actor) => actor.name === actor.original_name)
          .map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
      </ul>
    </div>
  );
}

// import { useState, useEffect } from "react";

// export default function Celebs() {
// const randomCeleb = 3;
// const API_KEY = process.env.API_KEY;
// const data = await fetch(
//   `https://api.themoviedb.org/3/person/${randomCeleb}?api_key=${API_KEY}`
// );

// const movieData = await fetch(
//   `https://api.themoviedb.org/3/person/${randomCeleb}/combined_credits?api_key=${API_KEY}`
// );

// const person = await data.json();
// const movies = await movieData.json();
// const cast = movies.cast;
// cast.sort((a, b) => b.vote_count - a.vote_count);
// className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"

// return (
//   <div>
//     <div>
//       {cast.length ? (
//         cast
//           .filter((movie) => movie.title)
//           .filter((movie) => movie.vote_count > 1000)
//           .map((movie) => (
//             <li key={movie.id}>
//               TITLE:{movie.title}
//               VOTE COUNT:{movie.vote_count}
//               ORDER:{movie.order}
//             </li>
//           ))
//       ) : (
//         <p>...loading</p>
//       )}
//     </div>
//   </div>
// );
// }
// }
