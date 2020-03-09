import React, {Component} from 'react';
import './Reset.css';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import MovieSuggestions from './Components/MovieSuggestions';
import MovieList from './Components/MovieList';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        watchList: [],

    }

    this.addWatchList = this.addWatchList.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.updateStatus = this.updateStatus.bind(this)

  }

  componentDidMount(){
    axios.get('api/movies')
    .then(response => {
      this.setState({watchList: response.data})
    })
  }

  addWatchList(movie){
    let index = this.state.watchList.findIndex(element => element.title.includes(movie.title))
    if(index === -1){
      axios.post('/api/movies', {movie})
      .then(response => {
      this.setState({watchList: response.data})
    })
    } else {alert('Movie Already Added')}
  }

  deleteMovie(id){
    axios.delete(`/api/movies/${id}`)
    .then(response => {
      this.setState({watchList: response.data})
    })
  }

  updateStatus(id){
    axios.put(`/api/movies/${id}`)
    .then(response => {
        this.setState({watchList: response.data})
    })
  }

  render(){
    // console.log(this.state.watchList)
    return(
      <div className='main-page'>
        <Header />
        <MovieSuggestions add={this.addWatchList}/>
        <MovieList myList={this.state.watchList} delete={this.deleteMovie} update={this.updateStatus}/>
      </div>
    )
  }
}

export default App
