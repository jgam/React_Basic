import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


class App extends Component {

  //Render: componentWillMount() -> render() -> componentDidMount()

  //Update: componentWillReceiveProps() -> shouldComponentUpdate()==true -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount(){//make a request
    console.log('will Mount')
    setTimeout(() => {
      this.setState({//can't change the state directly.
        greeting: 'Hello again!'//whenever the component mounts, we change greeting.
      })
    }, 5000)
  }

  _makeMovies = () => {

  }

  _callApi = (url) => {
    return fetch(url)
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _getData = async (inputs) => {//this is requesting different url function
    //parse the inputs here
    const url = "https://yts.am/api/v2/list_movies.json?sort_by=download_count";
    const getData = await this._callApi(url);

    this.setState({getData});
    
  }

  _getMovies = async () => {
    const movies = await this._callApi("https://yts.am/api/v2/list_movies.json?sort_by=download_count");//await?=>waiting for this._callApi() to be finished
    //this line doesn't get run until the await variable finishes
    this.setState({movies});
  }

  componentDidMount(){//this is this.setState() which can be used when updating the state
    console.log('aaaa')
    this._getMovies();

    /*
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
    */
  }

  //state is an object and react component. Whenever the state changes, the component renders.
  //whenever state changes, render happens

  state = {
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie 
        title={movie.title} 
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
         />
    })
    //bunch of arrays
    return movies
  }

  _LoadingPart = () => {//current most watched movies should be placed here
    return 'Loadingㅎㅎ';
  }

  render() {
    const {movies} = this.state;
    return (//jsx
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : this._LoadingPart()};
      </div>
    );
  }
}

export default App;
