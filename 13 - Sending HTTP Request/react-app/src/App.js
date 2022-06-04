import React, { useState, useEffect, useCallback } from "react";

import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(
        "https://react-http-post-6f5bd-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movie),
        }
      );

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
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
      const results = [];

      //When fetching the data, the data variable is a nested object.
      //In order to convert the data into an array of objects. First, simply create an empty array
      //Then create a for in loop to loop through all the keys in data (because data is now an object)
      //Keys are the ids of the movies; example '-N3geapjB7Fx2SowEFXU'
      //Then simply want to go to results array and then we push a new object for every key value pair that we got in the response data
      //data[key] => data['-N3geapjB7Fx2SowEFXU'].title, So in here we will get the title within the id of -N3geapjB7Fx2SowEFXU
      for (const key in data) {
        results.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      // const transformedMovies = results.map((movie) => {
      //   return {
      //     id: movie.id,
      //     title: movie.title,
      //     releaseDate: movie.releaseDate,
      //     openingText: movie.openingText,
      //   };
      // });

      setMovies(results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
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
