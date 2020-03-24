import React from 'react';

const MovieTile = (props) => {

  return(
    <li>
      {props.title}
      <button onClick={props.buttonClick} type="button">See Songs for This Movie</button>
    </li>
  )
}

export default MovieTile;
