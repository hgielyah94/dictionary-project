import React, { useState } from "react";
import axios from "axios";
import './App.css';

   export default function Dictionary() {
      let [keyword, setKeyword] = useState("");

      function handleKeywordChange(event) {
         setKeyword(event.target.value);
      }

      function handleResponse(response) {
         console.log(response.data[0]);
      }

      function Search(event) {
         event.preventDefault();

         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
         console.log(apiUrl);
         axios.get(apiUrl).then(handleResponse);
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
   </div> 
    
   );
   }