import React from 'react';
import "./css/font.css";
import Hero from "./components/Hero/Hero";
import Description from "./components/description/description";
import ServicesTrackClear from "./components/services-track-clear/services-track-clear";
import ServicesEstimate from "./components/services-estimate/services-estimate";


var titleTrack = "Track projects easily";
var paragraphTrack = "Providers can give updates, share satus, request updates, and require payments in one, efficient tool. Simple, easy, progress.";
var titleClear = "Clear Communication";
var paragraphClear = "Progress allows direct communication between the consumer and service provider. No more waiting for call backs, missing emails, or lost paperwork.";
var titleEstimate = "Estimate, approve, pay"
var paragraphEstimate = "The major steps of a service job are made simple with Progress. In one location, information and updates on project estimates and scopes of work are shared between provider and consumer."

export default () => (
  <div className="App">
    <Hero />
    <ServicesTrackClear titleTrack = {titleTrack} paragraphTrack = {paragraphTrack} titleClear = {titleClear} paragraphClear = {paragraphClear}/>
    <ServicesEstimate titleEstimate = {titleEstimate} paragraphEstimate = {paragraphEstimate} />
  </div>
);
