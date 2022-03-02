import React, { Component } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_API_KEY
class Main extends Component {
  state = {
    movies: [],
    loading:true
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search,loading:false }))
      .catch((err) => {
          console.log(err)
          this.setState({loading:false})
      })
  }

  searchMovies = (str, film_type = "all") => {
      this.setState({loading:true})
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        film_type !== "all" ? `&type=${film_type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search,loading:false }))
      .catch((err) => {
        console.log(err)
        this.setState({loading:false})
    })
  };

  render() {
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {this.state.loading  ? (
          <Preloader />
         
        ) : (
          <Movies movies={this.state.movies} />
       )}
      </main>
    );
  }
}

export default Main;
