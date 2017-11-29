import React from "react";
import codeimg from "./table.png";
import "./services-estimate.css";
import Description from "../description/description"; 


export default (props) => (
<section className="estimate">
    <img className="estimate__table" src={codeimg} alt="table mobile screenshots" />
    <Description title = {props.titleEstimate} paragraph = {props.paragraphEstimate} />
</section>
);