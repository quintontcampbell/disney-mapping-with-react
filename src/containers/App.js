import React, { Component } from 'react';
import MovieList from './MovieList';
import SongList from './SongList'

const App = props => {
  let handleClick1 = clickedMovieId => {

    let specificSongs = props.data.songs.filter(song => song.movieId === clickedMovieId)

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
        movieData={props.data.movies}
        handleClick2={handleClick1}
      />
      <h1>List of Songs </h1>
      <SongList
        songData={props.data.songs}
      />
    </div>
  );
};

export default App;
