import React from "react";
import codeimg from "./code.png";
import "./services-track-clear.css";
import Description from "../description/description"; 


export default (props) => (
<section className="track-clear">
    <Description title = {props.titleTrack} paragraph = {props.paragraphTrack} />
    <img className="track-clear__code" src={codeimg} alt="code mobile screenshots" />
    <Description title = {props.titleClear} paragraph = {props.paragraphClear} />
</section>
);