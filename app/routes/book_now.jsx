import React, { useEffect, useState } from 'react';
import { bikeData } from "../data/bannerImages";
import Card from "../components/Card";
import {Specification} from "../components/Specification";
import EnquiryNow from "../routes/enquiry_now";
import TestRide from "../routes/test_ride";
import Features from "../routes/features";

const BookNow = () => {
  const bikeId = 1;
  const selectedBike = bikeData.find(bike => bike.id === parseInt(bikeId));
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedVariantName, setSelectedVariantName] = useState('');
  const [activeTab, setActiveTab] = useState('engine');

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
    setSelectedColor(variant.colors[0]);
    setSelectedVariantName(variant.name);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  }

  const { model, variants } = selectedBike;
  useEffect(() => {
    if (variants.length > 0) {
      setSelectedVariant(variants[0]);
      setSelectedColor(variants[0].colors[0]);
      setSelectedVariantName(variants[0].name);
    }
  }, [variants]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='slideshow-container'>
      <div className='book-container'>
        <div className='varient-name'>
          <ul>
            {variants.map(variant => (
              <li key={variant.name} onClick={() => handleVariantClick(variant)}>{variant.name}</li>
            ))}
          </ul>
        </div>
        <div className='current-image'>
          <p>{model}</p>
          {selectedColor && <img src={selectedColor.link} alt={selectedColor.color} />}
          <span>{selectedVariantName}</span>
        </div>
        <div>
          <div className='select-varient'>
            {selectedVariant && (
              <div>
                <div className='color-image'>
                  {selectedVariant.colors.map(color => (
                    <div className={`box-img ${color === selectedColor ? 'selected' : ''}`} key={color.color} onClick={() => handleColorClick(color)}>
                      <div>
                        <img src={color.link} alt={color.color} />
                      </div>
                      <span>{color.color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='card'>
        <Card
          icon1="/images/span.icon1.png"
          text1="BOOK A TEST RIDE"
          link1="/test_ride"
          icon2="/images/span.icon3.png"
          text2="PRODUCT ENQUIRY"
          link2="/product_enquiry"
        />
      </div>
      <div className="sprit-icon2">
        <img src="/images/spirite_icon4.png" alt='sprite-icon'></img>
        <h1 >SPECIFICATIONS</h1>
      </div>
      <div>
        {selectedVariant && (
          <div>
            <div className="tab-container">
              <span className="menu-divider" style={{ color: activeTab === 'engine' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'engine' ? 'active' : ''} onClick={() => handleTabClick('engine')} style={{ color: activeTab === 'engine' ? 'red' : '' }}>ENGINE</button>
              <span className="menu-divider" style={{ color: activeTab === 'dimensions' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'dimensions' ? 'active' : ''} onClick={() => handleTabClick('dimensions')} style={{ color: activeTab === 'dimensions' ? 'red' : '' }}>BODY DIMENSION</button>
              <span className="menu-divider" style={{ color: activeTab === 'suspension' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'suspension' ? 'active' : ''} onClick={() => handleTabClick('suspension')} style={{ color: activeTab === 'suspension' ? 'red' : '' }}>FRAME & SUSPENSION</button>
              <span className="menu-divider" style={{ color: activeTab === '' ? 'red' : '' }}>|</span>
              <button className={activeTab === '' ? 'active' : ''} style={{ color: activeTab === '' ? 'red' : '' }}>TYRES & BREAKS</button>
              <span className="menu-divider" style={{ color: activeTab === '' ? 'red' : '' }}>|</span>
              <button className={activeTab === '' ? 'active' : ''} style={{ color: activeTab === '' ? 'red' : '' }}>TRANSMISSION</button>
            </div>
            <div>
              {activeTab === 'engine' && <Specification bikeData={selectedBike.specifications} tabName="engine" />}
              {activeTab === 'dimensions' && <Specification bikeData={selectedBike.specifications} tabName="dimensions" />}
              {activeTab === 'suspension' && <Specification bikeData={selectedBike.specifications} tabName="suspension" />}
            </div>
          </div>
        )}
      </div>
      <div className='text'>
        <span>
          +The technical specifications and design of the vehicle may vary according to the requirements and conditions without any notice • H’ness CB350 meets OBD-2B norms • Product <br /> shown in the picture may vary from actual product available in the market • All features and colours may not be part of all variants • **Conditions apply • Creative visualisation • Riding<br /> shots are shot in a controlled environment under expert supervision
        </span>
      </div>
      <div>
        <EnquiryNow />
      </div>
      <div>
        <TestRide />
      </div>
      <div>
        <Features />
      </div>
    </div>

  );
};

export default BookNow;
