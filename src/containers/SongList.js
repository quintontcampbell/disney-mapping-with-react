import React from 'react'
import SongTile from '../components/SongTile'

const SongList = props => {
  let songArray = props.songData.map(song => {
    return(
      <SongTile
        key={song.id}
        song={song}
      />
    )
  })

  return(
    <div>
      {songArray}
    </div>
  )
}

export default SongList
