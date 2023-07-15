import React from "react";

function Movie({ Title, Poster, Year }) {
  return (
    <li onClick={() => {}}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>📆</span> <span>{Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
