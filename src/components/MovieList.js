import React from 'React'
import MovieTile from './MovieTile'

const MovieList = props => {
  let movies = props.movies.map(movie => {
    let buttonClick = () => {props.handleClick(movie.id)}
    return(
      <MovieTile
        key={movie.id}
        title={movie.title}
        buttonClick={buttonClick}
       />
    )
  })
  return(
    <div>
      <h1>This is a movielist</h1>
      <ul>{movies}</ul>
    </div>
  )
}

export default MovieList
