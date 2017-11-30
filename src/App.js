import React from 'react';
// import Hero from "./components/Hero/Hero";
// import FollowAlong from "./components/Follow-along/Follow-along";
// import Footer from "./components/Footer/Footer";
// import ByobIcons from "./components/byob-icons/ByobIcons";
import OrderTotal from "./components/OrderTotal/OrderTotal";

export default () => (
  <div className="App">
    {/* <Hero />  
    <ByobIcons />
    <FollowAlong description="Follow along on Twitter for all the lastest news!" />
    <Footer text="2014 Shooting Brake Design" /> */}
    <OrderTotal  subtotal="subtotal" tax="tax" total="total" subtotalValor="1982.00" taxValor="115.68" totalValor="2097.68" />
  </div>
);