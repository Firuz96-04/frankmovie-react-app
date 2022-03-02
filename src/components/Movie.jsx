function Movie(props) {
  const {
    Title,
    Year,

    Type,
    Poster,
  } = props;

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        { Poster ==='N/A'?  <img className="activator" src={`https://via.placeholder.com/300x400.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide

C/O https://placeholder.com/`} /> :<img className="activator" src={Poster}/> }
     
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>{Year}</p>
        <span>{Type}</span>
      </div>
    </div>
  );
}

export default Movie;
