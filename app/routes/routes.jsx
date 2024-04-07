import React from 'react';
import { Routes, Route } from '@remix-run/react';
import ReachUs from "./reach_us";
import { HomePage } from "./home";
import OurStory from "./our_story";
import Motorcycle from "./motorcycle";
import BookNow from "./book_now";
import TestRide from "./test_ride";
import Features from "./features";
import Rsaew from "./rsa_ew";
import ProductEnquiry from "./product_enquiry";
import Disclaimer from "./disclaimer";


export default function NewRoute() {
  return (
    <Routes>
      <Route path='/*' element={<HomePage />} />
      <Route path="/reach_us" element={<ReachUs />} />
      <Route path="/book_now" element={<BookNow />} />
      <Route path="/our_story" element={<OurStory />} />
      <Route path="/motorcycle" element={<Motorcycle />} />
      <Route path="/test_ride" element={<TestRide />} />
      <Route path='/features' element={<Features />}/>
      <Route path='/rsa_ew' element={<Rsaew />}/>
      <Route path='/product_enquiry' element={<ProductEnquiry />}/>
      <Route path='/disclaimer' element={<Disclaimer />}/>
    </Routes>
  );
}
