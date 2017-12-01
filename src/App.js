import React from 'react';
import Hero from "./components/Hero/Hero";
import FollowAlong from "./components/Follow-along/Follow-along";
import Footer from "./components/Footer/Footer";
import OrderTotal from "./components/OrderTotal/OrderTotal";
import Byob from "./components/byob/byob";

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
    <Byob title="Bring Your Own Bussiness"/>
    <Hero title="progress" text="A new way for service providers and consumers to track project progression."/>  
    <FollowAlong description="Follow along on Twitter for all the lastest news!" />
    <Footer text="2014 Shooting Brake Design" />
    <OrderTotal subtotal={ordertotal.subtotal} tax={ordertotal.tax} total={ordertotal.total} subvalue={ordertotal.subvalue} taxvalue={ordertotal.taxvalue} totalvalue={ordertotal.totalvalue}/>
  </div>
);