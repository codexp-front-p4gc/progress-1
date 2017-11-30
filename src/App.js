import React from 'react';
import Hero from "./components/Hero/Hero";
import FollowAlong from "./components/Follow-along/Follow-along";
import Footer from "./components/Footer/Footer";
import ByobIcons from "./components/byob-icons/ByobIcons";

export default () => (
  <div className="App">
    <Hero title="progress" text="A new way for service providers and consumers to track project progression."/>  
    <ByobIcons />
    <FollowAlong description="Follow along on Twitter for all the lastest news!" />
    <Footer text="2014 Shooting Brake Design" />
  </div>
);