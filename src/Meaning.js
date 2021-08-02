import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div>
        <h5 id="description" className="text-capitalize"><em>{props.meaning.partOfSpeech}</em></h5>
        {props.meaning.definitions.map(function (definition, index)
            {
            return (
                <div key={index}>
            <h4 className="Quote">
                {definition.definition}
            </h4>
            <Example example={definition.example}/>
            <Synonyms synonyms={definition.synonyms} />
             </div>
                )
            })}
        </div>
    );
}