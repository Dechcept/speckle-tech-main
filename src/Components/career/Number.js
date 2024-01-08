import React, { useState, useEffect } from 'react';
import './NumberingEffect.css'; // Import the CSS file with Tailwind styles

const NumberingEffect = ({ targetNumbers }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(Array(targetNumbers.length).fill(0));

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleCountAnimation = () => {
      const element = document.getElementById('numberingEffect'); // Replace with the actual ID of your component
      if (!element) return;

      const boundingBox = element.getBoundingClientRect();
      const isInView = boundingBox.top < window.innerHeight && boundingBox.bottom >= 0;

      if (isInView && !inView) {
        setInView(true);

        targetNumbers.forEach((target, index) => {
          const interval = target / 100; // Adjust interval as needed

          setTimeout(() => {
            setCounts((prevCounts) =>
              prevCounts.map((prevCount, i) => (i === index ? target : prevCount))
            );
          }, interval);
        });
      } else if (!isInView && inView) {
        setInView(false);
        // Reset counts or perform any cleanup when the component is out of view
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleCountAnimation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleCountAnimation);
    };
  }, [inView, targetNumbers]);

  return (
    <div id="numberingEffect" className="grid gap-8 grid-cols-2 md:grid-cols-4">
      {targetNumbers.map((target, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl font-bold text-blue-500 transition-all duration-200">{Math.round(counts[index])}</p>
          <p className="text-sm text-gray-500">Data {index + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberingEffect;
