import Movie from "./Movie";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="my_movies">
      { 
      movies.length ?
      movies.map((movie, index) => {
        return (
          <Movie
            key={index}
            Poster={movie.Poster}
            Title={movie.Title}
            Year={movie.Year}
            Type={movie.Type}
          />
        )
   
      })
      : <h3>Nothing found</h3>
    }
    </div>
  );
}

export default Movies;
