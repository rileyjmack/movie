"use client";
import React from "react";
// , { useState }
// import { SearchInput } from "./searchbar";
import Celebs from "./celebs";

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
export default function App({ actors }) {
  // const actors = await fetchActors();

  // const [results, setResults] = useState<{ id: string; name: string }[]>();
  // const [selectedProfile, setSelectedProfile] = useState<{
  //   id: string;
  //   name: string;
  // }>();

  // type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  // const handleChange: changeHandler = (e) => {
  //   const { target } = e;
  //   if (!target.value.trim()) return setResults([]);
  //   const filteredValue = profiles.filter((profile) =>
  //     profile.name.toLowerCase().startsWith(target.value)
  //   );
  //   setResults(filteredValue);
  // };
  // }
  return (
    <div>
      {/* <SearchInput
        results={results}
        onChange={handleChange}
        renderItem={(item) => <p>{item.name}</p>}
        onSelect={(item) => setSelectedProfile(item)}
        value={selectedProfile?.name}
      /> */}
      <Celebs actors={actors} />
    </div>
  );
}
