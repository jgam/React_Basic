import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


class App extends Component {

  //Render: componentWillMount() -> render() -> componentDidMount()

  //Update: componentWillReceiveProps() -> shouldComponentUpdate()==true -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount(){//make a request
    console.log('will Mount')
    console.log(this.state);
    if(this.state.sortBy){
      console.log('shouldbe there')
      this._getMovies(this.state.sortBy);
    }
    else{
      console.log('hahaha');
      this._getMovies();
    }
    
    /*
    setTimeout(() => {
      this.setState({//can't change the state directly.
        greeting: 'Hello again!'//whenever the component mounts, we change greeting.
      })
    }, 10000)
    */
  }

  _jgmakeMovies = () => {

  }

  _callApi = (url) => {
    return fetch(url)
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _jggetData = async (inputs) => {//this is requesting different url function
    //parse the inputs here
    console.log('_jggetData')
    const url = "https://yts.am/api/v2/list_movies.json?sort_by=";
    const getData = await this._callApi(url+inputs);

    this.setState({getData});
    
  }
  componentWillUpdate(){
    console.log('componenWillUpdate')
  }

  _getMovies = async (input) => {
    let url = ''
    console.log('here in get movies')
    console.log(input);
    if (!input){
      url = "https://yts.am/api/v2/list_movies.json?sort_by=year";//await?=>waiting for this._callApi() to be finished
    //this line doesn't get run until the await variable finishes
    }
    else{
      url = "https://yts.am/api/v2/list_movies.json?sort_by="+input;
    }
    const movies = await this._callApi(url);
    console.log('before the state: ', this.state);
    this.setState({movies});
    console.log('after set state: ', this.state);
  }

  componentDidMount(){//this is this.setState() which can be used when updating the state
    console.log('aaaa')
    //this._getMovies();

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
    console.log('state sortBy is :', this.state.sortBy);
    const movies = this.state.movies.map((movie) => {//change movies to movie
      //console.log(movie)
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

  componentWillReceiveProps(){
    console.log('componentWillReceive Props')
  }

  _stateclickSubmit = (event) => {
    console.log('state changed click submit')
    this.setState(//making dynamic arrays here?
      {
        [event.target.name] : event.target.value
      }
    );
  }

  _clickSubmit= (event) => {
    console.log('submitted')
    alert('A name was submitted: ' + this.state.sortBy);
    this._getMovies(this.state.sortBy);
    event.preventDefault();
  }

  _clickSubmitRM = (event) => {
    alert('three movies are : ' + this.state.movie1 + this.state.movie2 + this.state.movie3);
    //here is the comparison logic and return filter queiries
    // genres, language, rating, runtime, year
    
    //thie._getMovies(new_sorting)
    
    event.preventDefault();
  }

  _LoadingPart = () => {//current most watched movies should be placed here
    return 'Loadingㅎㅎ';
  }

  render() {
    console.log('render');
    const {movies} = this.state;
    return (//jsx
      <div>
        <div className="recommendMovie">
          <h1>Name three movies!</h1>
          <form onSubmit={this._clickSubmitRM}>
            <input type="text" name="movie1" value={this.state.movie1} onChange={this._stateclickSubmit}/>
            <input type="text" name="movie2" value={this.state.movie2} onChange={this._stateclickSubmit}/>
            <input type="text" name="movie3" value={this.state.movie3} onChange={this._stateclickSubmit}/>            
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="searchMovie">
          <form onSubmit={this._clickSubmit}>
            <input type="text" name="sortBy" value={this.state.sortBy} onChange={this._stateclickSubmit}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={movies ? "App" : "App--loading"}>
          {this.state.sortBy}
          {this.state.movies ? this._renderMovies() : this._LoadingPart()};
        </div>
      </div>
    );
  }
}

export default App;
