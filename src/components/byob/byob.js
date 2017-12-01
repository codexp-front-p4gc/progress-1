import React from "react";
import ByobIcons from "../byob-icons/ByobIcons";
import ByobForm from "../byob-form/byob-form";
import Description from "../Description/Description";
import "./byob.css"

export default (props) => (
    <section class="byob">
        <h1 class="byob__title">{props.title}</h1>
        <ByobIcons />
        <Description title="Flexible Platform" paragraph="We are and industry agnostic platform. If you can track it, you can Progress it! Progress makes it easy for service providers to connect directly with their customers."/>
        <ByobForm description="Invite Me" email="Add your mail here"/>
    </section>
);
