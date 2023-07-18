import React from "react";

function Movie({
  Title: title,
  Poster: poster,
  Year: year,
  imdbID,
  onSelectMovie,
}) {
  return (
    <li onClick={() => onSelectMovie(imdbID)}>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>📆</span> <span>{year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
