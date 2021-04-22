import React from 'react';

function Movie(props) {
    const {
        Title: title,
        Year: year,
        Type: type,
        imdbID: id,
        Poster: poster
    } = props;

    return <div id={id} className="card movie sticky-action">
    <div className="card-image waves-effect waves-block waves-light">
        {
            poster === "N/A" ? 
                <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`}/>
                :
                <img className="activator" src={poster}/>
        }
    </div>
    <div className="card-content">
      <span className="card-title grey-text text-darken-4">{title}</span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>
}

export { Movie };