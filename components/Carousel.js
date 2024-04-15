// Import necessary components and styles from React and './styles/Carousel.css'
import React, { useState, useEffect } from 'react';
import './styles/Carousel.css';

// Define a React component called Carousel, which accepts various props.
const Carousel = ({ content, itemsPerSlide, title, maxWidth, maxHeight, style }) => {
  // Initialize two pieces of state: startIndex and animation.
  const [startIndex, setStartIndex] = useState(0); // Keeps track of the current starting index of the displayed items.
  const [animation, setAnimation] = useState(''); // Manages animation classes for slide-in and slide-out effects.

  // Calculate the ending index based on the startIndex and itemsPerSlide.
  const endIndex = Math.min(startIndex + itemsPerSlide, content.length);

  // Set up an effect using the useEffect hook.
  useEffect(() => {
    // This effect is triggered when the 'animation' state changes.
    if (animation) {
      // If there is an 'animation' value (a class name), set a timer to remove it after 0.5 seconds.
      const timer = setTimeout(() => setAnimation(''), 500); // Remove animation after 0.5s
      // Return a cleanup function to clear the timer when this effect re-runs or unmounts.
      return () => clearTimeout(timer);
    }
  }, [animation]); // The effect only runs when 'animation' changes.

  // Function to go to the next slide.
  const nextSlide = () => {
    setAnimation('slide-left'); // Apply a class for a leftward slide animation.
    // Calculate the new startIndex for the next slide or loop back to the beginning if necessary.
    setStartIndex(endIndex >= content.length ? 0 : endIndex);
  };

  // Function to go to the previous slide.
  const prevSlide = () => {
    setAnimation('slide-right'); // Apply a class for a rightward slide animation.
    // Calculate the new startIndex for the previous slide or loop back to the end if necessary.
    setStartIndex(startIndex === 0 ? content.length - (content.length % itemsPerSlide) : startIndex - itemsPerSlide);
  };

  // Render the Carousel component with its content.
  return (
    <div className="Carousel-container" style={style}>
      {/* Display the title if provided */}
      {title && <h1 className="Carousel-title">{title}</h1>}
      {/* Button to go to the previous slide */}
      <button className="Carousel-button left" onClick={prevSlide}>Prev</button>
      {/* Container for the carousel content with animation class */}
      <div className={`Carousel-content ${animation}`}>
        {/* Map and display the content items within the current slice */}
        {content.slice(startIndex, endIndex).map((item, index) => (
          <div key={index} className="Carousel-item">
            {/* Clone each content item and apply maxWidth and maxHeight styles */}
            {React.cloneElement(item, { style: { maxWidth, maxHeight } })}
          </div>
        ))}
      </div>
      {/* Button to go to the next slide */}
      <button className="Carousel-button right" onClick={nextSlide}>Next</button>
    </div>
  );
};

// Export the Carousel component for use in other parts of the application.
export default Carousel;
