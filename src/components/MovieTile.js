import React from 'react';

const MovieTile = (props) => {
  return(
    <li>
      {props.title}
      <button type="button" onClick={props.handleButtonClick}>See Songs for This Movie</button>
    </li>
  )
}

export default MovieTile;
