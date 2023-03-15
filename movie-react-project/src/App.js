import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { isNull } from "lodash";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // async : 비동기 함수
  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(isNull); // error 초기화
    try {
      // fetch 함수는 Promise 객체를 반환 : 응답 또는 에러 반환
      const response = await fetch("https://swapi.dev/api/films/"); // default: GET
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) content = <p>{error}</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
