import React from 'react';
import MovieTile from '../components/MovieTile';

const MovieList = props => {
  let movies = props.movies.map(movie => {
    let handleClick = (event) => {
      props.handleButtonClick(movie.id)
    }

    return(
      <MovieTile
        key={movie.id}
        title={movie.title}
        handleButtonClick={handleClick}
      />
    )
  })

  return(
    <div>
      <h2>Movies</h2>
      <ul>
        {movies}
      </ul>
    </div>
  );
};

export default MovieList;
