import React from 'react';
import Movie from './Movie'

function MovieList(props){
    let displayMyList = props.myList.map((element, index) => {return <Movie movie={element} key={index} delete={props.delete} update={props.update}/>})
    return(
        <div>
            <h2>My Movie List</h2>
            {displayMyList}
        </div>
    )
}

export default MovieList