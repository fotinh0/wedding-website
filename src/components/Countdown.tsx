import { useState, useEffect } from 'react';

export default function WeddingCountdown() {
  const [weddingDate] = useState(new Date('2026-08-01T18:00:00'));
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-light tracking-tight text-black mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs uppercase tracking-widest text-gray-500 font-light">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-white flex items-center justify-center py-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h3 className="text-xl font-light">Dhermi, Albania</h3>

          <div className="flex items-center justify-center mt-10 mb-8">
            <div className="w-135 h-px bg-black"></div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-12 mb-8 mx-auto">
          <TimeUnit value={timeLeft.days} label="DAYS" />
          <div className="text-3xl text-black font-light">:</div>
          <TimeUnit value={timeLeft.hours} label="HOURS" />
          <div className="text-3xl text-black font-light">:</div>
          <TimeUnit value={timeLeft.minutes} label="MINUTES" />
          <div className="text-3xl text-black font-light">:</div>
          <TimeUnit value={timeLeft.seconds} label="SECONDS" />
        </div>

        <div className="text-center">
          <div className="text-sm uppercase tracking-widest text-gray-500">
            {weddingDate
              .toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: '2-digit',
              })
              .replace(/\//g, '/')}
          </div>
        </div>
      </div>
    </div>
  );
}
