import React, { useState, useEffect } from 'react';

const ProductEnquiry = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selected, setSelected] = useState('TITLE');
    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];
    const options3 = [
        { label: "SELECT DEALER", var: '' }
    ]

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    useEffect(() => {
        fetchStates();
    }, []);

    const fetchStates = async () => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=USA&key=YOUR_API_KEY`);
            const data = await response.json();
            const extractedStates = data.results.map(result => result.address_components.find(component => component.types.includes('administrative_area_level_1')).long_name);
            setStates(extractedStates);
        } catch (error) {
            console.error('Error fetching states:', error);
        }
    };

    const fetchCities = async () => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${selectedState}&key=YOUR_API_KEY`);
            const data = await response.json();
            const extractedCities = data.results.map(result => result.address_components.find(component => component.types.includes('locality')).long_name);
            setCities(extractedCities);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setSelectedState(selectedState);
        setSelectedCity('');
        if (selectedState) {
            fetchCities(selectedState);
        } else {
            setCities([]);
        }
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div className="slideshow-container">
            <div className="ride-container">
                <img src="/images/Rectangle1.png" alt="div-image" className='ride-div' />
                <div className='ride-sprite-icon'>
                    <img src="/images/spirite_icon.png" alt="test-ride-icon" />
                    <span>PRODUCT ENQUIRY</span>
                </div>
                <div className="pro-enq-form">
                    <div>
                        <select className='ride-title-input' onChange={handleSelectChange} value={selected}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <input className="ride-name-input" type="text" placeholder="ENTER NAME" />
                        <input className="ride-email-input" type="email" placeholder="ENTER EMAIL" />

                    </div>
                    <div className='ride-mobile-div'>
                        <input className="ride-mob-input" type="text" placeholder="ENTER MOBILE NO." />
                        <button className='ride-otp-btn1' type="button">Get OTP</button>
                    </div>
                    <div>
                        <select className='ride-add-select' onChange={handleStateChange} value={selectedState}>
                            <option value="">SELECT STATE</option>
                            {states.map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                        <select className='ride-add-select' onChange={handleCityChange} value={selectedCity}>
                            <option value="">SELECT CITY</option>
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select className='ride-dealer-select' onChange={handleSelectChange} value={selected}>
                            {options3.map((option2) => (
                                <option key={option2.value} value={option2.value}>
                                    {option2.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div htmlFor="terms" className="ride-checkbox-label">
                        <span className="ride-checkbox-custom"></span>
                        <span className="ride-checkbox-text">I agree to the Terms & Conditions</span>
                    </div>
                    <div className="ride-input-btn1">
                        <button className='ride-btn1' type="submit">Submit</button>
                        <button className='ride-btn1' type="button">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEnquiry;
