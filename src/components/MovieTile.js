import React from 'react';

const MovieTile = (props) => {
  // debugger

  return(
    <li>
      {props.title}
      <button type="button" onClick={props.wrapperHandleClick}>See Songs for This Movie</button>
    </li>
  )
}

export default MovieTile;
