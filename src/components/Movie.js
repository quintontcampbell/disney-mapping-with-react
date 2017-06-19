import React from 'react';

const Movie = (props) => {
  return(
    <li>
      {props.title}
      <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </li>
  )
}

export default Movie;
