import React from "react";
import FeaturesSlider from "../components/FeaturesSlider";
import { features } from "../data/bannerImages";
const Features = () => {


    return (
        <div className="slideshow-container">
            <div className="sprit-icon2">
                <img src="/images/spirite_icon4.png" alt="sprite icon" />
                <h1>FEATURES </h1>
            </div>
            <div className="features-container">
                <img src="/images/Rectangle2.png" alt="div-image" className='feature-div' />
                <div className="feature-text">
                    <FeaturesSlider features={features}/>
                </div>
            </div>
        </div>
    );
};

export default Features;