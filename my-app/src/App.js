import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './movie'


class App extends Component {

  //Render: componentWillMount() -> render() -> componentDidMount()

  //Update: componentWillReceiveProps() -> shouldComponentUpdate()==true -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'//whenever the component mounts, we change greeting.
      })
    }, 5000)
  }

  componentDidMount(){//this is this.setState() which can be used when updating the state
    setTimeout(()=>{
      this.setState({
        movies:[
          {
            title: "Us",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Us_%282019%29_theatrical_poster.png/220px-Us_%282019%29_theatrical_poster.png"
          },
          {
            title: "Toy Story 4",
            poster: "http://t2.gstatic.com/images?q=tbn:ANd9GcTqR5uODJzk3PqEuZvzqCV52r_ZfmYkoy_Tl-H0vbzpgceszT2h"
          },
          {
            title: "Winnie the Pooh",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Winniethepooh.png/220px-Winniethepooh.png"
          }
        ]
      })
    },5000)

  }

  //state is an object and react component. Whenever the state changes, the component renders.
  //whenever state changes, render happens

  state = {
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    console.log(movies)//bunch of arrays
    return movies
  }

  render() {
    return (//jsx
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'};
        <script type="text/javascript" src="./tmdb.js"></script>
      </div>
    );
  }
}

export default App;
