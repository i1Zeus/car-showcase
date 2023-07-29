"use client";

import { useState } from "react";
import SearchManufacturer from "./searchManufacturer";

const Search = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <div className="searchBar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default Search;
