import React, { useState } from 'react';

const FeaturesSlider = ({ features }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="features-slider">
            <div className="slider-container">
                <div className="slide active">
                    <img src={features[currentSlide].image} alt="feature" className="feature-image" />
                    <div className="description">{features[currentSlide].description}</div>
                </div>
            </div>
            <div className="feature-controls">
                {features.map((_, index) => (
                    <span
                        key={index}
                        className={`dot1 ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturesSlider;
