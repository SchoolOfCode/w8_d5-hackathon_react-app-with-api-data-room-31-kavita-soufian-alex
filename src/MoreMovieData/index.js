import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './MoreMovieData.css'


function MoreMovieData() {
  const [MovieData, setMovieData] = useState("");
  let params = useParams();
  let id = params.MovieID;
  console.log(id)
  useEffect(() => {
    async function getMovieData(id) {
      console.log(id);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=776e707`
        );
        const fetchMovieData = await response.json();
        console.log(fetchMovieData)
        setMovieData(fetchMovieData);
      } catch (error) {}
    }
    getMovieData(id);
  }, [id]);
let RatingsArray = []
const {Title, Year, Rated, Runtime, Genre, Poster, Plot, Director, Actors, Writer} = MovieData
if (MovieData){ 
let Ratings = MovieData.Ratings 
RatingsArray = Object.values(Ratings)
console.log(RatingsArray)}
  return MovieData ? (<div className="containerData">
<h1 className="title">{Title}</h1>
<div className="subtitle"><p>{Year}</p>
<p>{Rated}</p>
<p>{Runtime}</p></div>
<div className="genres">{Genre}</div>
<img src={Poster} alt={Title}></img>
<div className="plot">{Plot}</div>
<div className="director"><h4>Director</h4>{Director}</div>
<div className="stars"><h4>Actors</h4>{Actors}</div>
<div className="writer"><h4>Writers</h4>{Writer}</div>
<div className="ratings"><h4>Ratings</h4><div className="ratingsData">
{RatingsArray.map(Rating => (<p>{Rating.Source}<br></br>{Rating.Value}</p>))}</div></div>
</div>) : 
(<></>)
}

export default MoreMovieData;
