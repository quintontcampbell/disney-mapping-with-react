import React from 'react';
import MovieList from './MovieList'
import SongList from './SongList'

const App = props => {
  let handleClick = clickedMovieId => {
    let specificSongs = props.data.songs.filter(song => {
      return song.movieId === clickedMovieId
    })

    // debugger

    let alertMessage = `The songs for this movie are:\n`

    specificSongs.forEach(song => {
      alertMessage += `${song.title}\n`
    })

    alert(alertMessage)
  }

  return(
    <div className='movie-container'>
      <h1>Movies to Watch</h1>
      <MovieList
        handleClick={handleClick}
        list={props.data.movies}
      />
      <SongList
        list={props.data.songs}
      />
    </div>
  );
};

export default App;
