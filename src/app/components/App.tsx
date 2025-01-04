"use client";
import React, { useState } from "react";
import { SearchInput } from "./searchbar";
import Celebs from "./celebs";
import Winscreen from "./Winscreen";
import Losescreen from "./Losescreen";
import Header from "./Header";
import myImage from "../../../public/movie-film-strip-blue-background_1017-33458.jpg";

export default function App({ actors, movies, movieactors, chosenActor }) {
  const [results, setResults] = useState<{ id: number; name: string }[]>();
  const [selectedProfile, setSelectedProfile] = useState<{
    id: number;
    name: string;
  }>();
  const [guesses, setGuesses] = useState(0);
  const [feedback, setFeedback] = useState(false);
  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);
    const filteredValue = actors.filter((profile) =>
      profile.name.toLowerCase().startsWith(target.value)
    );
    setResults(filteredValue);
  };
  return (
    <div>
      <Header />
      {feedback ? (
        <div>
          <Celebs
            chosenActor={chosenActor}
            guesses={4}
            actors={actors}
            movies={movies}
            movieactors={movieactors}
          />
          <Winscreen chosenActor={chosenActor} />
        </div>
      ) : (
        <div>
          <Celebs
            chosenActor={chosenActor}
            guesses={guesses}
            actors={actors}
            movies={movies}
            movieactors={movieactors}
          />
          {guesses > 4 ? (
            <Losescreen chosenActor={chosenActor} />
          ) : (
            <SearchInput
              results={results}
              onChange={handleChange}
              renderItem={(item) => <p>{item.name}</p>}
              onSelect={(item) => setSelectedProfile(item)}
              value={selectedProfile?.name}
              setGuesses={setGuesses}
              guesses={guesses}
              setFeedback={setFeedback}
              chosenActor={chosenActor}
            />
          )}
        </div>
      )}
    </div>
  );
}
