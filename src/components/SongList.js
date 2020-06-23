import React from "react"

import Song from "./Song"

const SongList = (props) => {
// const {songs} = props
  const songs = props.songs

  const songComponents = songs.map((song) => {

    return(
      <Song 
        key={song.id}
        title={song.title}
      />
    )
  })  

  return(
    <ul>{songComponents}</ul>
  )
}

export default SongList