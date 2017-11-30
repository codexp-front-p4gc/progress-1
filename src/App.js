import React from 'react';
import "./css/font.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/services/services";

var titleTrack = "Track projects easily";
var paragraphTrack = "Providers can give updates, share satus, request updates, and require payments in one, efficient tool. Simple, easy, progress.";
var titleClear = "Clear Communication";
var paragraphClear = "Progress allows direct communication between the consumer and service provider. No more waiting for call backs, missing emails, or lost paperwork.";
var titleEstimate = "Estimate, approve, pay"
var paragraphEstimate = "The major steps of a service job are made simple with Progress. In one location, information and updates on project estimates and scopes of work are shared between provider and consumer."
var orderDetails = {
  description1: "Tensioner",
  qty1: 1,
  price1: 95.00, 
  amount1: this.price1*this.qty1,
  description2: "Oil Filter",
  qty2: 1,
  price2: 103.00,
  amount2: 103.00,
  description3: "Bilstein 5100 Shocks",
  qty3: 4,
  price3: 200.00,
  amount3: 800.00,
  description4: "Labor (per hour)",
  qty4: 14,
  price4: 70.00,
  amount4: 980.00,
};


export default () => (
  <div className="App">
    <Hero />
    <Services titleTrack = {titleTrack} paragraphTrack = {paragraphTrack} titleClear = {titleClear} paragraphClear = {paragraphClear}
     titleEstimate = {titleEstimate} paragraphEstimate = {paragraphEstimate} />
    

  </div>
);
