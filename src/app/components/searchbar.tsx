"use client";
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

// import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { Actor, SelectedProfile } from "../defintions";
interface Props<T> {
  results?: T[];
  onChange: React.ChangeEventHandler;
  renderItem(item: T): JSX.Element;
  onSelect: (item: SelectedProfile) => void;
  value?: string;
  setGuesses: Function;
  guesses: number;
  setFeedback?: Function;
  chosenActor: Actor;
}

export const SearchInput = <T extends object>({
  results = [],
  onChange,
  renderItem,
  onSelect,
  value,
  setGuesses,
  guesses,
  setFeedback,
  chosenActor,
}: Props<T>): JSX.Element => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef<HTMLDivElement>(null);
  const [showResults, setShowResults] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");

  const handleSelection = (selectedIndex: number) => {
    const selectedItem: SelectedProfile = results[
      selectedIndex
    ] as SelectedProfile;
    if (!selectedItem) return resetSearchComplete();
    onSelect(selectedItem);
    resetSearchComplete();
    if (selectedItem.name == chosenActor.name) {
      setFeedback!(true);
    }
    setGuesses!(guesses + 1);
  };

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
  }, []);
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const { key } = e;
    let nextIndexCount = 0;
    if (key == "ArrowDown") {
      nextIndexCount = (focusedIndex + 1) % results.length;
    }
    if (key == "ArrowUp") {
      nextIndexCount = (focusedIndex + results.length - 1) % results.length;
    }
    if (key == "Escape") {
      resetSearchComplete();
    }

    if (key == "Enter") {
      e.preventDefault();
      handleSelection(focusedIndex);
    }
    setFocusedIndex(nextIndexCount);
  };

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandler = (e) => {
    setDefaultValue(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true);

    if (results.length <= 0) setShowResults(false);
  }, [results]);

  useEffect(() => {
    if (value) setDefaultValue(value);
  }, [value]);

  return (
    <div>
      <div className=" flex items-center justify-center">
        {/* <label htmlFor="inputId">searchIcon</label> */}
        <div
          tabIndex={1}
          onKeyDown={handleKeyDown}
          onBlur={resetSearchComplete}
          className="relative"
        >
          <input
            className="w-[600px] px-5 py-3 text-lg rounded-full border-2 border-gray-500 focus:border-gray-700 outline-none transition"
            // type="text"
            // id="inputId"
            // placeholder="Enter your keywords"
            // value={inputValue ?? ""}
            onChange={handleChange}
            value={defaultValue}
            type="text"
            placeholder={"Who's the movie star?"}
            // onKeyDown={handleKeyPress}
            // className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
          />
          {/* {Search REsults Container} */}
          {showResults && (
            <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-b1 rounded-br max-h 10 overflow-y-auto">
              {results.map((item, index) => {
                return (
                  <div
                    key={index}
                    onMouseDown={() => handleSelection(index)}
                    ref={index === focusedIndex ? resultContainer : null}
                    style={{
                      backgroundColor:
                        index === focusedIndex ? "rgba(0,0,0,0.1)" : "",
                    }}
                    className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                  >
                    {renderItem(item)}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <button className="skip_button" onClick={() => setGuesses(guesses + 1)}>
          SKIP
        </button>
      </div>
    </div>
  );
};
