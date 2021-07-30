import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map(director => {
    const movies = director.movies.map(movie => {
      return (
      <li key = {movie}>{movie}</li>
      )
    })

    return (
    <div key = {director.name}>
    <h3>{director.name}</h3>
    <h4>Movies: </h4>
    <ul>
      {movies}
    </ul>
    </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {directorsList}
    </div>
  );
}

export default Directors;
