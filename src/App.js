import React from 'react';
import Hero from "./components/Hero/Hero";
import FollowAlong from "./components/Follow-along/Follow-along";
import Footer from "./components/Footer/Footer";
import ByobIcons from "./components/byob-icons/ByobIcons";
import OrderTotal from "./components/OrderTotal/OrderTotal";

var ordertotal = {
  subtotal: "subtotal",
  tax: "tax",
  total: "total",
  subvalue: 95,
  taxvalue: 5,
  totalvalue: 100
}

export default () => (
 
  <div className="App">
    <Hero />  
    <ByobIcons />
    <FollowAlong description="Follow along on Twitter for all the lastest news!" />
    <Footer text="2014 Shooting Brake Design" />
    <OrderTotal subtotal={ordertotal.subtotal} tax={ordertotal.tax} total={ordertotal.total} subvalue={ordertotal.subvalue} taxvalue={ordertotal.taxvalue} totalvalue={ordertotal.totalvalue}/>
  </div>
);