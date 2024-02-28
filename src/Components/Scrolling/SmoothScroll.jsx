import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const SmoothScroll = () => {
  useEffect(() => {
    const handleScroll = event => {
      // Adjust sensitivity as needed
      const sensitivity = 1.5;

      // Calculate the scroll amount based on mouse wheel delta
      const deltaY = event.deltaY;
      const scrollAmount = deltaY * sensitivity;

      // Perform smooth scroll
      scroll.scrollMore(scrollAmount, {
        duration: 800, // Adjust duration as needed
        smooth: 'easeInOutQuint', // Adjust easing function as needed
      });
    };

    // Add event listener to handle mouse scroll
    window.addEventListener('wheel', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
