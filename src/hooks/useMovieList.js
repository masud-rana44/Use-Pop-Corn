import { useEffect, useState } from "react";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export default function useMovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMoviesData = async () => {
      const url = "https://api.themoviedb.org/3/movie/popular";
      const options = {
        method: "GET",
        headers,
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoviesData();
  }, []);

  return {
    movies,
    loading,
    error,
  };
}
