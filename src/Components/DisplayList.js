import React from 'react'

function DisplayList(props){
    return(
        <div className='suggested-movie'>
            <img className='poster-img' src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title}/>
            <button className='add-button' onClick={() => props.add(props.movie)}>Add to Watchlist</button>
        </div>
    )
}

export default DisplayList