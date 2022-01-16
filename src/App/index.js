import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Form from "../Form";
import Data from "../Data";
import Header from "../Header";
import MoreMovieData from "../MoreMovieData";


function App() {
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState('');

  function getQuery(query) {
    setQuery(query);
    setMovieData('MultipleMovies')
  }

  return (
    <>
      <Header />
      <Form getQuery={getQuery} />
      <Routes>
      <Route path="/" element={<Data query={query} movieData={movieData}/>} />
      <Route path="MoreMovieData/:MovieID" element={<MoreMovieData />} />
      </Routes>
    </>
  );
}

export default App;
