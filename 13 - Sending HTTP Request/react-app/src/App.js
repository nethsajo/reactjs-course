import React, { useState, useEffect, useCallback } from "react";

import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMovieHandler = (movie) => {
    console.log(movie);
  };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-http-post-6f5bd-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();
      const transformedMovies = data.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releasedData: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // let content = <p>Found no movies to display...</p>;

  // if (movies.length > 0) content = <MovieList movies={movies} />;

  // if (error) content = <p>{error}</p>;

  // if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <p>Found no movies to display...</p>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {/* {content} */}
      </section>
    </React.Fragment>
  );
}

export default App;
