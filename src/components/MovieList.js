import React from "react"

import MovieTile from "./MovieTile"

const MovieList = (props) => {
  // debugger

  const movieArray = props.movies.map((movie) => {
    // debugger
    const handleClickWrapper = () => {
      // debugger
      props.handleClick(movie.id)
    }
    
    return(
      <MovieTile
        key={movie.id}
        title={movie.title}
        handleClickWrapper={handleClickWrapper}
      />
    )
  })

  return(
    <div>
      <h2>Movie List</h2>
      
      <ul>
        {movieArray}
      </ul>
    </div>
  )
}

export default MovieList