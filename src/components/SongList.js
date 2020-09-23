import React from "react";
import SongTile from "./SongTile"

const SongList = (props) => {
  // debugger
  const songTileComponents = props.songs.map((song) => {
    // debugger
    return(
      <SongTile
        key={song.id}
        song={song}
      />
    )
  })

  return(
    <ul>
      {songTileComponents}
    </ul>
  )
}

export default SongList;