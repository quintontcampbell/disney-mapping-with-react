import React from 'react';

const Movie = (props) => {
  return(
    <li>
      {props.title}
      <button type="button">See Songs for This Movie</button>
    </li>
  )
}

export default Movie;
