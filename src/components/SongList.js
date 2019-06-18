import React from 'react'
import SongTile from './SongTile'

const SongList = props => {

  let songs = props.list.map(song => {
    return(
      <SongTile
        key={song.id}
        title={song.title}
      />
    )
  })

  return(
    <div>
      <h2>All The Songs</h2>
      {songs}
    </div>
  )
}

export default SongList
