import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './movie'




const movies = [
  {
    title: "Us",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Us_%282019%29_theatrical_poster.png/220px-Us_%282019%29_theatrical_poster.png"
  },
  {
    title: "Toy Story 4",
    poster: "http://t2.gstatic.com/images?q=tbn:ANd9GcTqR5uODJzk3PqEuZvzqCV52r_ZfmYkoy_Tl-H0vbzpgceszT2h"
  }
]

class App extends Component {
  render() {
    return (//jsx
      <div className="App">
      {movies.map(movie =>{//map goes through all the necessary loops and works like a for loop
        return <Movie title={movie.title} poster={movie.poster}/>
      })}
        <script type="text/javascript" src="./tmdb.js"></script>
      </div>
    );
  }
}

export default App;
