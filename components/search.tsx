"use client";

import React, { useState } from "react";
import SearchManufacturer from "./search-manufacturer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

const Search = (setManufacturer: any, setModal: any) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [SearchModal, setSearchModal] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" || SearchModal === "")
      return alert("Please fill all fields");

    updateSearchParams(
      setModal(SearchModal),
      setManufacturer(searchManufacturer)
    );
  };

  const updateSearchParams = (modal: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (modal) searchParams.set("modal", modal);
    else searchParams.delete("modal");

    if (manufacturer) searchParams.set("manufacturer", manufacturer);
    else searchParams.delete("manufacturer");

    const newParamsName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newParamsName);
  };
  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searchBar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setManufacturer}
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
          value={SearchModal}
          onChange={(e) => setSearchModal(e.target.value)}
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
