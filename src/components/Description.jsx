import React, { useCallback, useState } from "react";

function Description({ watched }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}

export default Description;

function WatchedSummary({ watched }) {
  return (
    <div>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>7.6</span>
        </p>
        <p>
          <span>🌟</span>
          <span>9.8</span>
        </p>
        <p>
          <span>⏳</span>
          <span>128 min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovieList({ watched }) {
  return (
    <ul>
      {watched.map((movie) => (
        <li>
          <img src={movie.poster} alt={`${movie.title} poster`} />
          <h3>{movie.title}</h3>
          <div>
            <p>
              <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

{
  /* <div className="bg-[#1f2937] max-h-[220px] flex">
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            className="h-[220px] w-[150px]"
          />

          <div className="p-8 text-[#dee2e6] text-lg flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white">{movie.Title}</h2>
            <p>16 Jul 2016 · {movie.runtime} min</p>
            <p>Action, Adventure, Sci-Fi</p>⭐ {movie.imdbRating} IMDb rating
          </div>
        </div> */
}
