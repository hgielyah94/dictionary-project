   import React from "react";
   import './App.css';

   export default function Search() {
   return (
   <div class="container" id="form">
    <form>
       <h3>Search a definition</h3>
    <div class="container">
      <input type="search" class="search" placeholder="Enter text here"></input>
      <input type="submit" class="submit"></input>
      </div>
    </form>
    </div>
   )
   }