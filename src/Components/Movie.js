import React, {Component} from 'react';

class Movie extends Component{
    constructor(props){
        super(props);

        
    }


    render(){
        if(this.props.movie.status === 'watched')
            {return( 
            <div className='watched-movie-container'>
                <img className='my-poster watched-poster' src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt={this.props.movie.title}/>
                <div className='watched-tag'>Watched</div>
                <img className='play-button' src={'https://i.stack.imgur.com/X2c0V.png'} onClick={() => this.props.update(this.props.movie.id)}/>
                <section className='delete-button-section'> 
                    <div className='delete-button delete-watched' onClick={() => this.props.delete(this.props.movie.id)}>X</div>
                </section>
            </div>
            )}
            else {return(
            <div className='my-movies'>
                <img className='my-poster' src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt={this.props.movie.title}/>
                <section className='delete-play-buttons'>
                    <img className='play-button' src={'https://i.stack.imgur.com/X2c0V.png'} onClick={() => this.props.update(this.props.movie.id)}/>
                    <div className='delete-button' onClick={() => this.props.delete(this.props.movie.id)}>X</div>
                </section>
            </div>
            )}
    }
}

export default Movie