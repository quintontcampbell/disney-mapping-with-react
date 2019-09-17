import React from 'React'
import SongTile from './SongTile'

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
      <h1>This is a Song List with more awesome CSS</h1>
      <ul>{songs}</ul>
    </div>
  )
}
export default SongList
