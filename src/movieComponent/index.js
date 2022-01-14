import React from 'react';

function MovieComponent ({Title, Poster, Year, imdbID}) {
    return (<div className="movie">
        <h3>{Title}</h3>
        <img alt={Title} src={Poster}></img>
        <p>Release Date: {Year}</p>
        {/* <p>{imdbID}</p> */}
    </div>
    )
}

export default MovieComponent