import React, { useState } from "react";

function Nav({ movies }) {
  return (
    <nav className="nav-ber">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}

export default Nav;

function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <span className="text-3xl">🍿</span>
      <h1 className="text-2xl font-semibold text-white">usePopcorn</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search"
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="justify-self-end text-lg">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
