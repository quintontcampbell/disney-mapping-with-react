import React from "react"

import SongTile from "./SongTile"

const SongList = (props) => {
  // debugger

  const songArray = props.songs.map((song) => {
    
    // debugger

    return(
      <SongTile
        key={song.id}
        title={song.title}
      />
    )
  })

  return(
    <div>
      <h2>Song List!</h2>
      <ul>
        {songArray}
      </ul>
    </div>
  )
}

export default SongList