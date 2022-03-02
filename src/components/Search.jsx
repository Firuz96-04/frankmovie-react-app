import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    my_types: "",
  };

  handlerSearch = (event) => {
    this.setState({ search: event.target.value });
    console.log(event.target.value);
  };

  handlerMyKey = (event) => {
    if (event.key === "Enter") {
    //   if (this.state.search.length > 0) {
        this.props.searchMovies(this.state.search.trim(),this.state.my_types);
    //   } else {
    //     this.props.searchMovies("matrix");
    //   }
    }
    //   this.props.searchMovies(this.state.search)
    console.log(this.state.search);
  };

  handlermyradiobtn = (event) => {
    
    this.setState(()=>({ my_types: event.target.value }),()=>{
        this.props.searchMovies(this.state.search.trim(), this.state.my_types);
    });
    // if (this.state.search.length > 0) {
    
    // } else {
    //   this.props.searchMovies("matrix", this.state.my_types);
    // }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="search"
            type="text"
            className="validate"
            placeholder="search"
            value={this.state.search}
            onChange={this.handlerSearch}
            onKeyDown={this.handlerMyKey}
          />
          <div className="radio_styles">
            <p>
              <label>
                <input
                  className="with-gap"
                  name="films"
                  type="radio"
                  value=""
                  onChange={this.handlermyradiobtn}
                  checked={this.state.my_types === ""}
                />
                <span>All</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="films"
                  type="radio"
                  value="movie"
                  onChange={this.handlermyradiobtn}
                  checked={this.state.my_types === "movie"}
                />
                <span>Movies only</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="films"
                  type="radio"
                  value="series"
                  onChange={this.handlermyradiobtn}
                  checked={this.state.my_types === "series"}
                />
                <span>series only</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
