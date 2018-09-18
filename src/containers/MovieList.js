import React from 'react';
import Movie from '../components/Movie';

const MovieList = props => {
  let movies = props.movies.map(movie => {
    let handleClick = (event) => {
      props.handleButtonClick(movie.id)
    }

    return(
      <Movie
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
