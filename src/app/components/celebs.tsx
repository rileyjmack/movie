// pages/index.js
import React, { useState } from "react";
import Modal from "./Modal";

// import { fetchActors } from "../../../pages/api/actors";
// import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
{
  /* <h1 class="font-sans font-light text-2xl lg:text-3xl md:text-2xl leading-9 tracking-tighter text-left pt-1 text-title">MoviePyramid.io</h1> */
}
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

const Celebs = ({ guesses, movieactors, chosenActor }) => {
  let boxid = 1;
  const [modalStates, setModalStates] = useState({});

  const closeModal = (movieId) => {
    setModalStates((prev) => {
      const newState = { ...prev, [movieId]: false };
      return newState;
    });
  };

  const openModal = (movieId) => {
    setModalStates((prev) => {
      const newState = { ...prev, [movieId]: true };
      return newState;
    });
  };

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
          .filter((actor) => actor.name == chosenActor.name)
          .slice(0, 5)
          .reverse()
          .map(function (actor) {
            const movieId = `${actor.name}-${actor.title}`
              .replace(/\s+/g, "-")
              .toLowerCase();

            return boxid > guesses + 1 ? (
              <div>
                <div className="title_text"> MOVIE {boxid++}</div>
                <div className="container">
                  <img
                    className="box"
                    src={`https://image.tmdb.org/t/p/w500/${actor.poster_path}`}
                  />
                  <p className="box" key={actor.id}>
                    {actor.title}
                  </p>
                </div>
              </div>
            ) : (
              <div key={movieId}>
                <Modal
                  isOpen={modalStates[movieId]}
                  onClose={() => closeModal(movieId)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.poster_path}`}
                  />
                </Modal>
                <div className="title_text">MOVIE {boxid++}</div>
                <img
                  onClick={() => openModal(movieId)}
                  className="box2"
                  src={`https://image.tmdb.org/t/p/w500/${actor.poster_path}`}
                />
                <p className="title_text">{actor.title}</p>
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
    gap: "10px", // Space between boxes
    padding: "10px",
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
