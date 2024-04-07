import React, { useState, useEffect } from 'react';

export default function GallerySlide({ images }) {
    const [startIndex, setStartIndex] = useState(0);
    const [imagesPerScreen, setImagesPerScreen] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 864) {
                setImagesPerScreen(3);
            } else {
                setImagesPerScreen(4);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollLeft = () => {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - imagesPerScreen));
    };

    const scrollRight = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + imagesPerScreen, images.length - imagesPerScreen));
    };

    return (
        <div className="slideshow-container">
            <p className='gallery-title'>GALLERY</p>
            <div className="gallery-wrapper">
                {images.slice(startIndex, startIndex + imagesPerScreen).map((image, index) => (
                    <div key={startIndex + index} className="gallery-slide">
                        <img src={image} className="slide-img" />
                    </div>
                ))}
            </div>
            <div className="scroll-buttons">
                <button className="scroll-button" onClick={scrollLeft}>
                    <img src="/images/chevron-left.svg" alt="Left Arrow" />
                </button>
                <button className="scroll-button" onClick={scrollRight}>
                    <img src="/images/chevron-right.svg" alt="Right Arrow" />
                </button>
            </div>
        </div>
    );
}
