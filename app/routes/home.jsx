import React , {useState} from 'react';
import ImageSlider from "~/components/ImageSlider";
import BikeSlider from "~/components/BikeSlider";
import LandingPage from "./landing_page_text";
import GallerySlide from "~/components/GallerySlide";
import Card from "~/components/Card";
import { bannerImages, bikeSDetails } from "../data/bannerImages";

export function HomePage() {
  const [currentSlideId, setCurrentSlideId] = useState(1);
  const handleSlideChange = (slideId) => {
    setCurrentSlideId(slideId);
  };
  const selectedBike = bikeSDetails.find(bike => bike.id === parseInt(currentSlideId));
  const galleryImages = selectedBike ? selectedBike.gallery.map(image => image) : [];
  return (
      <div>
        <ImageSlider images={bannerImages} />
        <LandingPage />
        <BikeSlider images={bikeSDetails} onSlideChange={handleSlideChange} />
        <Card
          icon1="/images/span.icon1.png"
          text1="BOOK A TEST RIDE"
          link1="/test_ride"
          icon2="/images/span.icon3.png"
          text2="PRODUCT ENQUIRY"
          link2="/product_enquiry"
        />
         <GallerySlide images={galleryImages} />
      </div>
    
  );
}
