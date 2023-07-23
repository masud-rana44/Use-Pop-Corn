const fallbackImg =
  "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

function Movie({
  Title: title,
  Poster: poster,
  Year: year,
  imdbID,
  onSelectMovie,
}) {
  return (
    <li onClick={() => onSelectMovie(imdbID)}>
      <img src={poster !== "N/A" ? poster : fallbackImg} alt={`movie poster`} />
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
