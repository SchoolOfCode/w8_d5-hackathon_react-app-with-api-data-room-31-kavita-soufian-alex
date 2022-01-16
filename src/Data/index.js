import React, { useEffect, useState, useCallback } from "react";
import MovieComponent from "../movieComponent";
import { nanoid } from "nanoid";
import "./Data.css";

function Data({ query, movieData }) {
  const [data, setData] = useState(false);


  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=776e707`
        );
        const fetchData = await response.json();
        console.log(fetchData);
        setData(fetchData.Search);
      } catch (error) {}
    }
    if (query !== "") getData();
  }, [query]);

  

  if (data &&  movieData==="MultipleMovies")
  return (
    <div className="movieList">
      {data.map(({ Title, Poster, Year, imdbID }) => {
        return (
          <MovieComponent
            Title={Title}
            alt={Title}
            Poster={Poster}
            Year={Year}
            imdbID={imdbID}
            key={nanoid()}
            // getMovieInfo={getMovieInfo}
          />
        );
      })}
    </div>)
  else {
    return (<></>)
  }
}
export default Data;
