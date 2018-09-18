import React from 'react';
import Song from '../components/Song';

const SongList = props => {
  let songs = props.songs.map(song => {
    return(
      <Song
        key={song.id}
        title={song.title}
      />
    )
  })

  return(
    <div>
      <h2>All Songs</h2>
      <ul>
        {songs}
      </ul>
    </div>
  );
};

export default SongList;
  
