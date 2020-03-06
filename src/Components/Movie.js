import React, {Component} from 'react';

class Movie extends Component{
    constructor(props){
        super(props);

        this.state = {
            movieStatus: ''
        }
    }


    render(){
        return(
            <div>
                <img className='poster-img' src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt={this.props.movie.title}/>
                <button onClick={() => this.props.update(this.props.movie.id)}>Watched</button>
                <button className='delete-button' onClick={() => this.props.delete(this.props.movie.id)}>Delete</button>
            </div>
        )
    }
}

export default Movie