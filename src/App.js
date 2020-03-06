import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        watchList: []
    }
  }

  render(){
    return(
      <div>
        <Header />

      </div>
    )
  }
}

export default App
