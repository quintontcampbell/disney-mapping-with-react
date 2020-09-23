import React from "react";

import MovieTile from "./MovieTile";

const MovieList = (props) => {
  // let handleClick = props.handleClick

  const movieTitleArray = props.movies.map((movie) => {
    // debugger
    let wrapperHandleClick = () => {
      // debugger
      props.handleClick(movie.id)
    }

    return(
      <MovieTile 
        key={movie.id}
        title={movie.title}
        wrapperHandleClick={wrapperHandleClick}
      />
    )
  })

return(
  <ul>
    {movieTitleArray}
  </ul>
  )
}

export default MovieList;