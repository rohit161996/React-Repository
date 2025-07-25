import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  // const movieNames = useSelector(store => store.gpt.movieNames);
  // const movieResults = useSelector(store => store.gpt.movieResults);

  const gpt = useSelector(store => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames) return null;

  console.log("movieNames", movieNames);
  console.log("movieResults", movieResults);

  return (
    <div className="p-4 m-4 bg-black/70 rounded-lg text-white">
      {
        movieNames.map((movieName, index) => {
          return (
            < MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          );
        })
      }
    </div>
  )
}

export default GPTMovieSuggestions
