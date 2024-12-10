"use client";
// import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
interface Props<T> {
  results?: T[];
  onChange?: React.ChangeEventHandler;
  renderItem(item: T): JSX.Element;
}

export const SearchInput = <T extends object>({
  results = [],
  onChange,
  renderItem,
}: Props<T>): JSX.Element => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef<HTMLDivElement>(null);
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
    }

    if (key == "Enter") {
    }
    setFocusedIndex(nextIndexCount);
  };

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

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
    <div className="h-screen flex items-center justify-center">
      {/* <label htmlFor="inputId">searchIcon</label> */}
      <div tabIndex={1} onKeyDown={handleKeyDown} className="relative">
        <input
          className="w-[600px] px-5 py-3 text-lg rounded-full border-2 border-gray-500 focus:border-gray-700 outline-none transition"
          // type="text"
          // id="inputId"
          // placeholder="Enter your keywords"
          // value={inputValue ?? ""}
          onChange={onChange}
          // onKeyDown={handleKeyPress}
          // className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
        />
        {/* {Search REsults Container} */}
        <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-b1 rounded-br max-h 10 overflow-y-auto">
          {results.map((item, index) => {
            return (
              <div
                key={index}
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
      </div>
    </div>
  );
};
