import React from 'react';
import SongTile from '../components/SongTile';

const SongList = props => {
  let songs = props.songs.map(song => {
    return(
      <SongTile
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
