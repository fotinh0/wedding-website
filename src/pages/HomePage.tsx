// import { Heart, Calendar, MapPin } from 'lucide-react';
import Marquee from "react-fast-marquee";
import Countdown from "../components/Countdown";
import logo3 from "../assets/logos/3.png";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Language } from "../types";
import homepageTranslations from "../translations/homepage";
import foreheadkiss from "../assets/forehead-kiss.jpg";
import kissing from "../assets/kissing.jpg";
import hugging from "../assets/hugging.jpg";
import standing from "../assets/standing.jpg";
import CTABanner from "../components/CTABanner";
import Ornament from "../components/Ornament";

interface HomePageProps {
  language: Language;
  handleNavigation: (page: string) => void;
}

export default function HomePage({
  language,
  handleNavigation,
}: HomePageProps) {
  const t = homepageTranslations[language.code];

  const [speed, setSpeed] = useState(35);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) setSpeed(25);
    };

    updateSpeed();

    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const nextSection = document.getElementById(sectionId);
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <CTABanner
        text={t.RSVPCTAText}
        handleNavigation={() => handleNavigation("rsvp")}
      />
      <div className="relative overflow-hidden">
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white bg-gradient-to-b from-transparent via-black/10 to-black/40">
          <h2 className="text-6xl sm:text-8xl mb-6 text-center fade-up drop-shadow-sm">
            {t?.overlay}
          </h2>
          <span className="eyebrow !text-white/90 fade-up">Dhërmi · Albania</span>
        </div>
        <div
          className="sm:hidden absolute bottom-9 left-1/2 transform -translate-x-1/2 z-20 animate-pulse"
          onClick={() => scrollToSection("welcome")}
        >
          <ChevronDown size={28} strokeWidth={1} color="white" />
        </div>
        <Marquee speed={speed}>
          {[
            foreheadkiss,
            kissing,
            hugging,
            standing,
            foreheadkiss,
            kissing,
            hugging,
            standing,
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`wedding-${i}`}
              className="h-[85vh] w-auto object-cover"
            />
          ))}
        </Marquee>
      </div>

      {/* Welcome section  */}
      <div
        id="welcome"
        className="max-w-3xl mx-auto px-6 pt-16 pb-28 sm:pb-36 text-center fade-up"
      >
        <img src={logo3} alt="Wedding Logo" className="h-45 w-auto mx-auto" />
        <p className="text-xl leading-[1.9] font-light max-w-[34rem] mx-auto">
          {t.welcome}
        </p>
        <Ornament className="my-10" />
        <p className="text-xl leading-[1.9] font-light max-w-[34rem] mx-auto">
          {t.details}
        </p>
      </div>

      {/* Our Story */}
      <div className="bg-stone">
        <div className="max-w-4xl mx-auto px-4 py-28 sm:py-36 text-center">
          <Ornament className="mb-6" />
          <h2 className="text-[50px] sm:text-7xl mb-16 text-center">
            {t.story}
          </h2>

          <div className="space-y-16">
            {/* How We Met */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-8 flex items-center justify-center">
                <h3 className="text-3xl sm:text-4xl italic font-light">{t.howWeMet}</h3>
              </div>
              <div className="h-px w-24 mx-auto bg-gold/70 sm:h-40 sm:w-px"></div>
              <div className="sm:w-1/2 p-8 text-left">
                <p className="text-lg leading-[1.9] max-w-md">{t.howWeMetText}</p>
              </div>
            </div>

            {/* The Proposal */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-8 flex items-center justify-center">
                <h3 className="text-3xl sm:text-4xl italic font-light">{t.proposal}</h3>
              </div>
              <div className="h-px w-24 mx-auto bg-gold/70 sm:h-40 sm:w-px"></div>
              <div className="sm:w-1/2 p-8 text-left">
                <p className="text-lg leading-[1.9] max-w-md">{t.proposalText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details & RSVP CTA */}
      <div className="max-w-4xl mx-auto px-4 py-28 sm:py-36 text-center">
        <p className="eyebrow mb-6">Save the date</p>
        <div className="flex justify-around flex-col sm:flex-row-reverse">
          <div>
            <p className="text-5xl sm:text-6xl font-light italic">{t.date}</p>
          </div>
        </div>
        <Countdown code={language.code} translation={t} />
      </div>

      {/* CTA Banner */}
      <CTABanner
        text={t.RSVPCTAText}
        handleNavigation={() => handleNavigation("rsvp")}
      />
    </section>
  );
}
