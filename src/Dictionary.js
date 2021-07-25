   import React, { useState } from "react";
   import './App.css';

   export default function Dictionary() {
      let [keyword, setKeyword] = useState("");

      function handleKeywordChange(event) {
         setKeyword(event.target.value);
      }

      function Search(event) {
         event.preventDefault();
         alert(`Searching for ${keyword}...`);
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