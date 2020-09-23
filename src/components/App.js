import React from 'react';

import MovieList from "./MovieList"
import SongList from "./SongList"

const App = props => {

  let handleClick = (clickedMovieId) => {
    // let specificSongs = props.data.songs.filter(song => song.movieId === clickedMovieId)
    
    // debugger
    let specificSongs = props.data.songs.filter((song) => {
      return(
        song.movieId === clickedMovieId
      )
    })

    let alertMessage = `The songs for this movie are:\n`
    
    specificSongs.forEach((song) => {
      alertMessage += `${song.title}\n`
    })

    alert(alertMessage)
  }
  // debugger
  return(
    <div className='movie-container'>
      <h1>Movies to Watch</h1>
      <MovieList
        handleClick={handleClick}
        movies={props.data.movies}
      />

      <h1>Song List!</h1>
      <SongList
        songs={props.data.songs}
      />
    </div>
  );
};

export default App;
