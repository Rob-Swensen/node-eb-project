import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import MovieSuggestions from './Components/MovieSuggestions'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        watchList: []
    }
  }

  addWatchList(movie){
    axios.post('/api/movies', {movie})
    .then(response => {
    this.setState({watchList: response.data})
  })
  }

  render(){
    return(
      <div>
        <Header />
        <MovieSuggestions />
      </div>
    )
  }
}

export default App
