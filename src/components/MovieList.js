import React from "react"
import MovieTile from "./MovieTile"

const MovieList = props => {
const movies = props.movies

const movieComponents = movies.map((movie) => {
  let title = movie.title
  let key = movie.id

  const buttonClick = () => {
    props.handleClick(movie.id)
  }

  return(
    <MovieTile 
      title={title}
      key={key}
      buttonClick={buttonClick}
    />
  )
})

  return(
    <ul>{movieComponents}</ul>
  )
}

export default MovieList