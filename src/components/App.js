import React, { Component } from 'react';

const App = props => {
  let handleClick = clickedMovieId => {
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
    </div>
  );
};

export default App;
