import {useState} from 'react'
import './App.css';
import Form from '../Form';
import Data from '../Data';

function App() {
  const [query, setQuery] = useState("")

  function getQuery(query){
    setQuery(query)
  }


  return (
    <>
  <Form getQuery={getQuery}/>
  <Data query={query}/>
  </>);
}

export default App;
