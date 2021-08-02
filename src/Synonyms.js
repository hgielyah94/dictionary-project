import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        <p id="Synonyms" className="text-capitalize"><strong>Synonyms:</strong></p>
        {props.synonyms.map(function (synonym, index) {
          return <p id="Synonyms" className="text-capitalize" key={index}>{synonym}, </p>;
        })}
      </span>
    );
  } else {
    return null;
  }
}