import React, { useState } from "react";

const Rsaew = () => {
    const [selected, setSelected] = useState('TITLE');
    const options = [
        { label: 'TITLE', value: '' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];
    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };
    return (
        <div className="slideshow1-container">
            <div className="reach-us-container">
                <img className="reach-us-image" src="/images/spirite_icon4.png" alt="getInTouch-icon" />
                <div className="reach-us-text">ROADSIDE ASSISTANCE (RSA) & EXTENDED WARRANTY</div>
            </div>
            <div className="rsa-form-container">
                <div className="rsa-row1">
                    <div>
                        <select className="rsa-select-model">
                            <option value="" disabled selected hidden>SELECT MODEL</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                    </div>
                    <div>
                        <select className="rsa-select-branch">
                            <option value="" disabled selected hidden>SELECT YOUR BRANCH</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                    </div>
                </div>
                <div className="rsa-row2">
                    <select className='rsa-title-input' onChange={handleSelectChange} value={selected}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <input className="rsa-name-input" type="text" placeholder="FIRST NAME" />
                    <input className="rsa-name-input" type="text" placeholder="LAST NAME" />
                </div>
                <div className="rsa-row3">
                    <input className="rsa-email-input" type="email" placeholder="ENTER EMAIL" />
                    <input className="rsa-mob-input" type="text" placeholder="ENTER MOBILE NO." />
                    <button className='rsa-otp-btn' type="button">Get OTP</button>
                </div>
                <div className="rsa-row4">
                    <input className="rsa-std-input" type="email" placeholder="ENTER STD CODE" />
                    <input className="rsa-phone-input" type="email" placeholder="ENTER PHONE NO." />
                </div>
                <div className="rsa-row5">
                    <textarea className="rsa-desc-input" type="text" placeholder="DESCRIPTION" />
                </div>

                <div className='rsa-row6'>
                    <div htmlFor="terms" className="rsa-checkbox-label">
                        <span className="rsa-checkbox-custom"></span>
                        <span className="rsa-checkbox-text">DO YOU WANT TO RENEW INSURANCE?</span>
                    </div>
                    <div className="gap"></div> {/* Add a div for the gap */}
                    <div htmlFor="terms" className="rsa-checkbox-label">
                        <span className="rsa-checkbox-custom"></span>
                        <span className="rsa-checkbox-text">DO YOU WANT TO EXTENDED WARRANTY?</span>
                    </div>
                </div>

                <div className="rsa-row7">
                    <button className='rsa-btn' type="submit">Submit</button>
                    <button className='rsa-btn' type="button">Reset</button>
                </div>
            </div >
            <div className="frame">
                <img src="/images/frame1.png" alt="Frame1" />
                <img src="/images/frame2.png" alt="frame2" />
                <img src="/images/frame3.png" alt="frame3" />
            </div>
        </div>
    );
};

export default Rsaew;