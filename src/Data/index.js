import React, { useEffect, useState } from "react";
import MovieComponent from "../movieComponent";
import {nanoid} from 'nanoid';
import './Data.css';


function Data({ query }) {
  const [data, setData] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=776e707`
        );
        const fetchData = await response.json();
        setData(fetchData.Search);
      } catch (error) {}
    }
    if (query !== "") getData();
  }, [query]);
  
  return data ? (
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
          />
        );
      })}
    </div>
  ) : (
    <></>
  );
}
export default Data;

// key: 776e707
