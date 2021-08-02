import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic)
    return (
    <span className="Phonetics">
    <h5>{props.phonetic.text} </h5>
    
    <a className="Audio" href={props.phonetic.audio} target="_blank" rel="noreferrer"> 
    Listen <i className="fas fa-volume-up"></i> 
    </a>
    </span>
    );
}