import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./App.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

   return (
   <div className="container" id="form">
    <form onSubmit={Search}>
      <h3>Search a definition</h3>
    <div className="container">
      <input type="search" className="search" placeholder="Enter text here" onChange={handleKeywordChange}></input>
      <input type="submit" className="submit"></input>
   </div>
   </form>
   <Results results={results} />
   </div> 
    
   );
   }