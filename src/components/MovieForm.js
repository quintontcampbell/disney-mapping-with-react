import React from 'react';

const MovieForm = props => {
  return(
    <form onSubmit={props.handleSubmit}>
      <input type='text' placeholder='Add a Movie' value={props.movie} onChange={props.handleChange} />
      <input type='submit' value='Add to List' />
    </form
  )
}

export default MovieForm;
