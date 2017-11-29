import React from "react";
import "./description.css";

export default (props) => (
<article className="description">
    <h2 className="description__title">{props.title}</h2>
    <p className="description__paragraph">{props.paragraph}</p>
</article>
);