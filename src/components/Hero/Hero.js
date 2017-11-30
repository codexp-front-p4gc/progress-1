import React from "react";
import HeroIcon320 from "./hero-icon-320px.png";
import HeroIcon320 from "./hero-icon-320px.png";
import HeroIcon320 from "./hero-icon-320px.png";
import HeroIcon320 from "./hero-icon-320px.png";
import "./Hero.css"

export default (props) => (
    <header className="hero">
        <div>
            <h1 className="hero__title">{props.title}</h1>
            <p className="hero__text">{props.text}
            </p>
        </div>
        <img className="hero__icon" srcset = {`${HeroIcon320} 568w`; }  alt="Celular com a tela inicial do aplicativo progress"/>
    </header>
);