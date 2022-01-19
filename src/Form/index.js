import { React, useState } from "react";
import "./Form.css";
import { MdMovie } from "react-icons/md";

function Form({ getQuery }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getQuery(input);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        required
        placeholder="Search for a movie"
      ></input>
      <button type="submit">
        <MdMovie />
      </button>
    </form>
  );
}

export default Form;
