import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
const API_KEY = process.env.API_KEY;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async (value) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/person?q=${value}&api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.suggestions;
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value).then((newSuggestions) => {
      setSuggestions(newSuggestions);
    });
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setValue(suggestion);
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const inputProps = {
    value,
    onChange: (event, { newValue }) => setValue(newValue),
    placeholder: "Search...",
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={onSuggestionSelected}
    />
  );
};

export default SearchBar;
