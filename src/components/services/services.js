import React from "react";
import TableImg from "./table.png";
import CodeImg from "./code.png";
import "./services.css";
import Description from "../description/description";

export default (props) => (
    <section className="services">
        <section className="track-clear">
            <Description title={props.titleTrack} paragraph={props.paragraphTrack} />
            <img className="track-clear__code" src={CodeImg} alt="code mobile screenshots" />
            <Description title={props.titleClear} paragraph={props.paragraphClear} />
        </section>
        <section className="estimate">
            <img className="estimate__table" src={TableImg} alt="table mobile screenshots" />
            <Description title={props.titleEstimate} paragraph={props.paragraphEstimate} />
        </section>
    </section>
);