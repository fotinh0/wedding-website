// src/components/Countdown.tsx
import React, { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
  const weddingDate = new Date('2026-08-01T00:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center text-lg font-light">
      <span className="mx-1">{timeLeft.days} days</span>
      <span className="mx-1">{timeLeft.hours} hours</span>
      <span className="mx-1">{timeLeft.minutes} minutes</span>
      <span className="mx-1">{timeLeft.seconds} seconds</span>
    </div>
  );
};

export default Countdown;
