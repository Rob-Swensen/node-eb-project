import React, {Component} from 'react';

class Movie extends Component{
    constructor(props){
        super(props);

        
    }


    render(){
        return(
            <div className='my-movies'>
                <img className='my-poster' src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt={this.props.movie.title}/>
                    <section className='delete-watched-buttons'>
                        <button onClick={() => this.props.update(this.props.movie.id)}>Watched</button>
                        <span className='delete-button' onClick={() => this.props.delete(this.props.movie.id)}>X</span>
                    </section>
            </div>
        )
    }
}

export default Movie