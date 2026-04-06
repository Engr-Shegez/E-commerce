"use client";

import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [showSearch, setShowSearch] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const toggleMobileSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      // Reset search when opening
      setSearch("");
      // SHow result immediatly when opening
      setShowResults(true);
    }
  };
  return (
    <div className="relative lg:w-full">
      {/* {Mobile searchbar} */}
      <button onClick={toggleMobileSearch} className="lg:hidden mt-1.5">
        {showSearch ? (
          <X className="w-5 h-5 text-white hover:text-tech_bg_orange hoverEffect" />
        ) : (
          <Search className="w-5 h-5 text-white hover:text-tech_bg_light_green hoverEffect" />
        )}
      </button>
      <form
        onSubmit={(e) => e.preventDefault}
        className="relative hidden lg:flex items-center"
      >
        <Input
          placeholder=" Search..."
          className="flex-1 rounded-md py-5 focus-visible:ring-0 focus-visible:border-tech_bg_orange bg-tech_bg_white text-tech_bg_dark placeholder:font-semibold placeholder:tracking-wide pr-14"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowResults(true)}
        />
        {search ? (
          <X
            onClick={() => setSearch("")}
            className="w-5 h-5 absolute right-3 top-2.5 text-tech_bg_black hover:text-tech_bg_orange hoverEffect cursor-pointer"
          />
        ) : (
          <Search className="absolute right-4 top-2.8 w-5 h-5 text-tech_bg_black" />
        )}
      </form>
    </div>
  );
}

export default SearchBar;
