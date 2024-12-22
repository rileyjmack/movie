"use client";
// import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
interface Props<T> {
  results?: T[];
  onChange?: React.ChangeEventHandler;
  renderItem(item: T): JSX.Element;
  onSelect?: (item: T) => void;
  value?: string;
}

export const SearchInput = <T extends object>({
  results = [],
  onChange,
  renderItem,
  onSelect,
  value,
}: Props<T>): JSX.Element => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef<HTMLDivElement>(null);
  const [showResults, setShowResults] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");
  const [feedback, setFeedback] = useState("");
  const [guesses, setGuesses] = useState(1);

  const handleSelection = (selectedIndex: number) => {
    const selectedItem = results[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    onSelect(selectedItem);
    resetSearchComplete();
    if (selectedItem.name == "Ana de Armas") {
      setFeedback("CORRECT");
    }
    setGuesses(guesses + 1);
    console.log(guesses);
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
  // initiate the router from next/navigation

  // const router = useRouter();

  // // We need to grab the current search parameters and use it as default value for the search input

  // const [inputValue, setValue] = useState(results);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;

  //   setValue(inputValue);
  // };

  // // If the user clicks enter on the keyboard, the input value should be submitted for search

  // // We are now routing the search results to another page but still on the same page

  // const handleSearch = () => {
  //   if (inputValue) return router.push(`/?q=${inputValue}`);

  //   if (!inputValue) return router.push("/");
  // };

  // const handleKeyPress = (event: { key }) => {
  //   if (event.key === "Enter") return handleSearch();
  // };

  return (
    <div>
      <div>{feedback ? <p>{feedback}</p> : <p></p>}</div>
      <div className="h-screen flex items-center justify-center">
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
      </div>
    </div>
  );
};
