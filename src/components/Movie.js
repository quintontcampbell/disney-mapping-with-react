import React from 'react';

const Movie = () => {
  return(
    <li>
      {name}
      <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </li>
  )
}
