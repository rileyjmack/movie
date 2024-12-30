// pages/index.js
import React, { useState } from "react";
import { Actor } from "../defintions";
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

const Celebs = ({ guesses, actors, movies, movieactors, imageSource }) => {
  let boxid = 1;
  return (
    <div>
      {/* <ul>
        {actors
          .filter((actor) => actor.name === actor.original_name)
          .map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
      </ul> */}
      <div style={styles.container}>
        {movieactors
          .filter((actor) => actor.name == "Johnny Depp")
          .slice(0, 5)
          .reverse()
          .map(function (actor) {
            return boxid > guesses + 1 ? (
              <div>
                <div>MOVIE {boxid++}</div>
                <img
                  className="box"
                  style={styles.box}
                  src={`https://image.tmdb.org/t/p/w500/${actor.poster_path}`}
                />
                <p key={actor.id} className="box">
                  {actor.title}
                </p>
              </div>
            ) : (
              <div>
                <div>MOVIE {boxid++}</div>
                <img
                  className="box2"
                  style={styles.box}
                  src={`https://image.tmdb.org/t/p/w500/${actor.poster_path}`}
                />
                <p key={actor.id}>{actor.title}</p>
              </div>
            );
          })}
      </div>
      {/* <ul>
        {movies
          .filter((movie) => movie.original_language === "en")
          .map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
      </ul> */}
    </div>
  );
};

const styles = {
  container: {
    display: "flex", // Flexbox layout
    justifyContent: "space-around", // Optional: Adjust spacing between boxes
    alignItems: "center", // Align items vertically
    gap: "10px", // Space between boxes
  },
  box: {
    // backgroundColor: "#0070f3",
    // color: "#fff",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #000",
    borderRadius: "4px",
    flex: "1", // Optional: Makes boxes grow/shrink equally
    maxWidth: "150px", // Optional: Restrict the box width
  },
};

export default Celebs;
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
