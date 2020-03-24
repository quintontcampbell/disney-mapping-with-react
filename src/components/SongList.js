import React from 'react'
import SongTile from './SongTile'

const SongList = (props) => {
  let songs = props.songs.map((song) => {
    return(
      <SongTile
        key={song.id}
        title={song.title}
      />
    )
  })

  return(
    <>
      <h1>All the Songs</h1>
      <ul>{songs}</ul>
    </>
  )
}

export default SongList;
