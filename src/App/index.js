import { useState } from "react";
import "./App.css";
import Form from "../Form";
import Data from "../Data";
import Header from "../Header";


function App() {
  const [query, setQuery] = useState("");

  function getQuery(query) {
    setQuery(query);
  }

  return (
    <>

      <Header />

      <Form getQuery={getQuery} />
      <Data query={query} />
    </>
  );
}

export default App;
