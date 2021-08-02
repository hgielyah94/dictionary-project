import React from "react";
import Meaning from "./Meaning";
import './Results.css';

export default function Results(props) {
    console.log(props.results);

    if (props.results) {
    return (
        <div className="Results">
            <h2 className="text-capitalize">{props.results.word}</h2><h5>{props.results.phonetics[0].text}</h5>
            {props.results.meanings.map(function (meaning, index)
            {
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                );
            })}
        </div>
    );
} else {
    return null;
}
}