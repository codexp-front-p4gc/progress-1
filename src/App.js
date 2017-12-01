import React from 'react';
import Hero from "./components/Hero/Hero";
import FollowAlong from "./components/Follow-along/Follow-along";
import Footer from "./components/Footer/Footer";
import Byob from "./components/byob/byob";

export default () => (
  <div className="App">
    <Byob title="Bring Your Own Bussiness"/>
    <Hero title="progress" text="A new way for service providers and consumers to track project progression."/>  
    <FollowAlong description="Follow along on Twitter for all the lastest news!" />
    <Footer text="2014 Shooting Brake Design" />
  </div>
);