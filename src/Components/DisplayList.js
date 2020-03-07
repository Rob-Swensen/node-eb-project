import React from 'react'

function DisplayList(props){
    return(
        <div className='suggested-movie'>
            <img className='suggest-poster' src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} onClick={() => props.add(props.movie)}/>
        </div>
    )
}

export default DisplayList