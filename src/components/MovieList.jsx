import React, { useEffect } from "react";
import Movie from "./Movie";

export function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} {...movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
