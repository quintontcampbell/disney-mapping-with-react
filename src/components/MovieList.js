import React from 'react'
import MovieTile from './MovieTile'

const MovieList = props => {

  // debugger

  let movies = props.list.map(movie => {
    let clickButton = () => {
      props.handleClick(movie.id)
    }

    return(
      <MovieTile
        key={movie.id}
        title={movie.title}
        clickButton={clickButton}
      />
    )
  })

  return (
    <div>
      <h2>All The Songs</h2>
      {movies}
    </div>
  )
}

export default MovieList
