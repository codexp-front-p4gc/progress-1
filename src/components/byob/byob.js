import React from "react";
import byobIcons from "../byob-icons/ByobIcons";
import byobForm from "../byob-form/byob-form";
import "./byob.css"

export default (props) => (
    <section class="byob">
        <h1 class="byob__title">{props.title}</h1>
        <byobIcons />
        <article class="description">
            <h2 class="description__title description__title--lighter">{props.subtitle}}</h2>
            <p class="description__paragraph">{props.text}</p>
        </article>
        <byobForm />
    </section>
);

