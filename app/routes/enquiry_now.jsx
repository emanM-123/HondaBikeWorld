import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { bikeSDetails } from "../data/bannerImages";

const EnquiryNow = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);  
    const id = searchParams.get('id') || '1'; 
    const selectedBike = bikeSDetails.find(bike => bike.id === parseInt(id));
    console.log("selectedBikeselectedBike",selectedBike);
    const [selected, setSelected] = useState('TITLE');
    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];
    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };
    const { image, price } = selectedBike;
    return (
        <div className="slideshow-container">
            <div className="sprit-icon2">
                <img src="/images/spirite_icon.png" alt='spirite-icon'></img>
                <h1 >ENQUIRY NOW</h1>
            </div>

            <div className="enquiry-container">
                <div className="image">
                    <img src={image} alt="Image" />
                    <p>{price}</p>
                    <span>EX-SHOWROOM PRICE</span>
                </div>
                <div className="enq-form">
                    <div>
                        <select className='enq-title-input' onChange={handleSelectChange} value={selected}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <input className="enq-name-input" type="text" placeholder="ENTER NAME" />
                    </div>
                    <div>
                        <input className="enq-email-input" type="email" placeholder="ENTER EMAIL" />
                    </div>
                    <div className='enq-mobile-div'>
                        <input className="enq-mob-input" type="text" placeholder="ENTER MOBILE NO." />
                        <button className='enq-otp-btn1' type="button">Get OTP</button>
                    </div>
                    <div htmlFor="terms" className="checkbox-label">
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">I agree to the Terms & Conditions</span>
                    </div>
                    <div className="enq-input-btn1">
                        <button className='enq-btn1' type="submit">Submit</button>
                        <button className='enq-btn1' type="button">Reset</button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default EnquiryNow;