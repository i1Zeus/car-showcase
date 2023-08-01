"use client";

import React, { useState } from "react";
import SearchManufacturer from "./search-manufacturer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SearchButton = ({ className }: { className: string }) => (
  <button type="submit" className={cn("-ml-3 z-10", className)}>
    <Image
      src="/magnifying-glass.svg"
      alt="glass"
      height={40}
      width={40}
      className="object-contain"
    />
  </button>
);

// @ts-ignore
const Search = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [SearchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" || SearchModel === "")
      return alert("Please fill all fields");

    setModel(SearchModel)
    setManufacturer(searchManufacturer)
  };

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searchBar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton className="sm:hidden" />
      </div>
      <div className="searchBar__item">
        <Image
          src="/model-icon.png"
          alt="car modal"
          height={25}
          width={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="modal"
          value={SearchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchBar__input"
        />
        <SearchButton className="sm:hidden" />
      </div>
      <SearchButton className="max-sm:hidden" />
    </form>
  );
};

export default Search;
