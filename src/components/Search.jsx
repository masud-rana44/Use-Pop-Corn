import { useState } from "react";

export function Search() {
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
