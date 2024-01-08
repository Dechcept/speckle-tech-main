import React, { useState, useEffect } from "react";

const NumberingEffect = ({ targetNumbers }) => {
  const [counts, setCounts] = useState(Array(targetNumbers.length).fill(0));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const interval = 20; // Interval for updating the counts

    const steps = Math.ceil(duration / interval);

    const counters = targetNumbers.map((target, index) => {
      const stepValue = target / steps;
      let currentStep = 0;

      const counterInterval = setInterval(() => {
        currentStep++;
        setCounts((prevCounts) =>
          prevCounts.map((prevCount, i) =>
            i === index ? Math.min(prevCount + stepValue, target) : prevCount
          )
        );

        if (currentStep === steps) {
          clearInterval(counterInterval);
        }
      }, interval);

      return counterInterval;
    });

    return () =>
      counters.forEach((counterInterval) => clearInterval(counterInterval));
  }, [targetNumbers]);

  return (
    <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
      {targetNumbers.map((target, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl font-bold text-blue-500 transition-all duration-200">
            {Math.round(counts[index])}
          </p>
          <p className="text-sm text-gray-500">Data {index + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberingEffect;
