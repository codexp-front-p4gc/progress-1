import React from "react";
import ByobIcons from "../byob-icons/ByobIcons";
import ByobForm from "../byob-form/byob-form";
import Description from "../description/description";
import "./byob.css"

export default (props) => (
    <section class="byob">
        <h1 class="byob__title">{props.title}</h1>
        <ByobIcons />
        <Description />
        <ByobForm />
    </section>
);

