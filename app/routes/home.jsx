import React from 'react';
import ImageSlider from "~/components/ImageSlider";
import BikeSlider from "~/components/BikeSlider";
import LandingPage from "./landing_page_text";
import GallerySlide from "~/components/GallerySlide";
import Card from "~/components/Card";
import { bannerImages, bikeImages, gallaryImage } from "../data/bannerImages";

export function HomePage() {
  return (
      <div>
        <ImageSlider images={bannerImages} />
        <LandingPage />
        <BikeSlider images={bikeImages} />
        <Card
          icon1="/images/span.icon1.png"
          text1="BOOK A TEST RIDE"
          link1="/test_ride"
          icon2="/images/span.icon3.png"
          text2="PRODUCT ENQUIRY"
          link2="/product_enquiry"
        />
        <GallerySlide images={gallaryImage.map(image => image.image)} />
      </div>
    
  );
}
