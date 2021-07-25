import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div>
            <h4>
                {props.meaning.definitions[0].definition}
            </h4>
            <p className="text-capitalize"><em>
                "{props.meaning.definitions[0].example}"
            </em></p>
        </div>
    );
}