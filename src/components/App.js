import React, { Component } from 'react';
import MovieList from './MovieList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [
        "Lady and the Tramp",
        "Sleeping Beauty",
        "The Jungle Book"
      ],
      movie: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    let newMovie = this.state.movie
    let newMovies = this.state.movieData.concat(newMovie)
    this.setState({
      movieData: newMovies,
      movie: ''
    })
  }

  handleChange(event) {
    let newMovie = event.target.value;
    this.setState({ movie: newMovie })
  }

  handleClick(event) {
    alert('Button was clicked')
  }

  render() {
    return(
      <div className='movie-container'>
        <h1>Movies to Watch</h1>

        <MovieList movies={this.state.movieData} handleButtonClick={this.handleClick}/>
      </div>
      <MovieForm handleChange={this.handleChange} />
    );
  }
};

export default App;
