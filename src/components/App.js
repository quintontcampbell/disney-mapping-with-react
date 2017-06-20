import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [
        { key: 1, title: "Lady and the Tramp" },
        { key: 2, title: "Sleeping Beauty" },
        { key: 3, title: "The Jungle Book" }
      ],
      movie: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    let newId = this.state.movieData.length + 1
    let newMovie = {
      id: newId,
      title: this.state.movie
    }
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
        <MovieForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} movie={this.state.movie}/>
      </div>
    );
  }
};

export default App;
