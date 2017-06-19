import React from 'react';

const Movie = (props) => {
  return(
    <li>
      {props.name}
      <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </li>
  )
}

export default Movie;
