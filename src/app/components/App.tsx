"use client";
import React, { useState } from "react";
import { SearchInput } from "./searchbar";
import Celebs from "./celebs";
import Winscreen from "./Winscreen";

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
      {feedback ? (
        <Winscreen chosenActor={chosenActor} />
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
            <p>You lose Sorry</p>
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
