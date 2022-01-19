import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function MovieComponent({ Title, Poster, Year, imdbID }) {
  const navigate = useNavigate();
  const handleClick = useCallback(
    (imdbID) => navigate(`/MoreMovieData/${imdbID}`),
    [navigate])
  

  return (
    <div className="movie" onClick={() => handleClick(imdbID)}>
      <h3>{Title}</h3>
      <img alt={Title} src={Poster}></img>
      <p>Release Date: {Year}</p>

      <div>
        <></>
      </div>
    </div>
  );
}

export default MovieComponent;
