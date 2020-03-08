import React from 'react';
import Movie from './Movie'

function MovieList(props){
    let displayMyList = props.myList.map((element, index) => {return <Movie movie={element} key={index} delete={props.delete} update={props.update}/>})
    return(
        <div className='display-two'>
            <h2 className='my-movie-header'>My Movies</h2>
            <section className='display-my-list'>
                {displayMyList}
            </section>
        </div>
    )
}

export default MovieList