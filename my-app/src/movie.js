import React, { Component } from 'react';
import PropTypes from 'prop-types';//this checks the type of prop
import './movie.css';

class Movie extends Component {

    static propTypes = {//this checks which kind of datatypes and if it is required or not
        title: PropTypes.string,
        poster: PropTypes.string
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}

export default Movie;