import React, { Component } from 'react';
import PropTypes from 'prop-types';//this checks the type of prop
import './movie.css';



function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster" />
    )
}


export default Movie;