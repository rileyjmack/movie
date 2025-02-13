"use client";

import React, { useState, useEffect } from "react";
import { SearchInput } from "./searchbar";
import Celebs from "./celebs";
import Winscreen from "./Winscreen";
import Losescreen from "./Losescreen";
import Header from "./Header";
import { Actor } from "../defintions";
import Modal from "./Modal";
import PlayAgainButton from "./PlayAgainButton";
import Stars from "./Stars";

export default function App({ actors, movieactors }) {
  const [chosenActor, setChosenActor] = useState<Actor>({
    id: 1,
    name: "Riley Mack",
    gender: 1,
    known_for_department: "Writing",
    original_name: "Riley Mack",
  });
  const [isModalOpen, setModalOpen] = useState(true);
  const closeModal = () => setModalOpen(false);

  const handlePlayAgain = () => {
    // Reset the game state or perform other actions
    window.location.reload();
  };

  useEffect(() => {
    // Function to update the value
    const updateValue = () => {
      const randomActor = actors[Math.floor(Math.random() * actors.length)];
      setChosenActor(randomActor);
    };

    // Call the function on component mount
    updateValue();
  }, []); // Empty dependency array ensures this runs only on mount
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
      profile.name.toLowerCase().includes(target.value.toLowerCase())
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
            movieactors={movieactors}
          />
          <div className="button-container">
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <Winscreen chosenActor={chosenActor} guesses={guesses} />
            </Modal>
            <PlayAgainButton size={2} onClick={handlePlayAgain} />
          </div>
        </div>
      ) : (
        <div>
          <Celebs
            chosenActor={chosenActor}
            guesses={guesses}
            movieactors={movieactors}
          />
          <div>
            {guesses > 4 ? (
              <div className="button-container">
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <Losescreen chosenActor={chosenActor} />
                </Modal>
                <PlayAgainButton size={2} onClick={handlePlayAgain} />
              </div>
            ) : (
              <div>
                <Stars guesses={guesses} />
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
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
