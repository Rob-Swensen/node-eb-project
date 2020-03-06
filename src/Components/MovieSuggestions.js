import React, {Component} from 'react';
import axios from 'axios';

class MovieSuggestions extends Component {
    constructor(props){
        super(props);

        this.state = {
            suggestedList: [],
        }
    }

    componentDidMount(){
        axios.get('/api/suggested-movies')
        .then(response => {
            this.setState({suggestedList: response.data})
            console.log(this.state.suggestedList)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        let list = suggestedList.map(movie => key={movie.id})
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default MovieSuggestions