import React, {Component} from 'react';
import DisplayList from './DisplayList';
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
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const list = this.state.suggestedList.map((element, index) => {return <DisplayList key={index} movie={element} add={this.props.add}/>});
        return(
            <div className='suggestion-section'>
                {list}
            </div>
        )
    }
}

export default MovieSuggestions