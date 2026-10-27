import { useState, useEffect } from "react";
import type { HomepageTranslationContent, Lang } from "../types";

export default function WeddingCountdown({
  code,
  translation,
}: {
  code: Lang;
  translation: HomepageTranslationContent;
}) {
  const [weddingDate] = useState(new Date("2026-08-01T11:00:00"));
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

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
      <div className="font-display text-4xl md:text-5xl font-normal tabular-nums text-black mb-3">
        {String(value).padStart(2, "0")}
      </div>
      <div className="eyebrow !text-[0.7rem]">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-white flex items-center justify-center py-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h3 className="eyebrow !text-sm">Dhërmi · Albania</h3>

          <div className="flex items-center justify-center mt-10 mb-8">
            <span className="h-px w-24 bg-gold/60" /><span className="mx-4 block h-1.5 w-1.5 rotate-45 border border-gold" /><span className="h-px w-24 bg-gold/60" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-12 mb-8 mx-auto">
          <TimeUnit value={timeLeft.days} label={translation.days} />
          <div className="text-2xl text-gold font-light -mt-6">·</div>
          <TimeUnit value={timeLeft.hours} label={translation.hours} />
          <div className="text-2xl text-gold font-light -mt-6">·</div>
          <TimeUnit value={timeLeft.minutes} label={translation.minutes} />
          <div className="text-2xl text-gold font-light -mt-6">·</div>
          <TimeUnit value={timeLeft.seconds} label={translation.seconds} />
        </div>

        <div className="text-center">
          <div className="eyebrow">
            {code === "sq" ? "01/08/26" : "08/01/2026"}
          </div>
        </div>
      </div>
    </div>
  );
}
