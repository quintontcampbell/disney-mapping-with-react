import React, { Component } from 'react';
import MovieList from '../containers/MovieList';
import SongList from '../containers/SongList';

const App = props => {
  let handleClick = id => {
    let specificSongs = props.data.songs.filter(song => song.movieId === id)
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
        movies={props.data.movies}
        handleButtonClick={handleClick}
      />
      <SongList
        songs={props.data.songs}
      />
    </div>
  );
};

export default App;
