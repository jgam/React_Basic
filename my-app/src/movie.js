import React, { Component } from 'react';
import './movie.css';

class Movie extends Component {
    render(){
        return(
            <div>
                <h1>hello this is a movie</h1>
                <h1>{this.props.title}</h1>
                <MoviePoster />
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Us_%282019%29_theatrical_poster.png/220px-Us_%282019%29_theatrical_poster.png"/>
        )
    }
}

export default Movie;