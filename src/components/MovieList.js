import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  let movies = props.movies.map(movie => {
    return(
      <Movie
        key={movie.key}
        title={movie.title}
        handleButtonClick={props.handleButtonClick}
      />
    )
  })

  return(
    <ul>
      {movies}
    </ul>
  );
};

export default MovieList;
