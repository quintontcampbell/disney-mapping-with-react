import React from 'react'
import MovieTile from '../components/MovieTile'

const MovieList = props => {
  let movieArray = props.movieData.map(movie => {

    let prettyFunctionWrappingHandleClick = event => {
      props.handleClick2(movie.id)
    }

    return(
      <MovieTile
        key={movie.id}
        movie={movie}
        handleButtonClick={prettyFunctionWrappingHandleClick}
      />
    )
  })

  return(
    <div>
      {movieArray}
    </div>
  )
}


export default MovieList
