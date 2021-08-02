import React from "react";

export default function Synonyms(props) {
    if (props.example) {
        return (
            <span>
                <p className="Quote"><em>
                "{props.example}."
            </em></p>
            </span>
        );
    } else {
        return null;
    }
}