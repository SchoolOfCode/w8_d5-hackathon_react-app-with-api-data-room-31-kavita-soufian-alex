import { React, useState } from "react";
import './Form.css';
function Form({getQuery}) {
    const [input, setInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        getQuery(input)
    };

    function handleChange(e) {
        setInput(e.target.value)}
    

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input type="text" onChange={e => handleChange(e)} required></input>
      <button type="submit">Find the movie!</button>
    </form>
  );
}
 
export default Form 