import React, { useState } from "react";
import Movie from "./Movie";
import useMovieList from "../hooks/useMovieList";

function Results({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <ul>
          {movies?.map((movie) => (
            <Movie key={movie.imdbID} {...movie} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Results;
