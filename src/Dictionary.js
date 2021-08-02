import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./App.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function Search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = 
    "563492ad6f91700001000001bff3bf603aa6432d9967050de50b78ea"

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`

    let headers = { Authorization: `Bearer ${pexelsApiKey}` }


    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

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
   <Photos photos={photos} />
   </div> 
    
   );
   }