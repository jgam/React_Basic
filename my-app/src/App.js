import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './movie'

const movies = [
  "Us",
  "Toy Story 4",
  "Oldboy",
  "Star Wars"
]

const posters = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Us_%282019%29_theatrical_poster.png/220px-Us_%282019%29_theatrical_poster.png",
  "http://t2.gstatic.com/images?q=tbn:ANd9GcTqR5uODJzk3PqEuZvzqCV52r_ZfmYkoy_Tl-H0vbzpgceszT2h"
]

class App extends Component {
  render() {
    return (//jsx
      <div className="App">
        <Movie title={movies[0]} poster={posters[0]}/>
        <script type="text/javascript" src="./tmdb.js"></script>
      </div>
    );
  }
}

export default App;
