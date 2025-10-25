// import { Heart, Calendar, MapPin } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import Countdown from '../components/Countdown';
import logo3 from '../assets/logos/3.png';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Language } from '../types';
import homepageTranslations from '../translations/homepage';

const images = [
  '/src/assets/forehead-kiss.jpg',
  '/src/assets/kissing.JPG',
  '/src/assets/hugging.jpg',
  '/src/assets/standing.JPG',
];

interface HomePageProps {
  language: Language;
}

export default function HomePage({ language }: HomePageProps) {
  const t = homepageTranslations[language.code];

  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) setSpeed(100);
    };

    updateSpeed();

    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const nextSection = document.getElementById(sectionId);
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      <div className="relative overflow-hidden">
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white bg-black/5">
          <h2 className="text-6xl sm:text-8xl mb-2 text-center">
            {t?.overlay}
          </h2>
        </div>
        <div
          className="sm:hidden absolute bottom-9 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
          onClick={() => scrollToSection('welcome')}
        >
          <ChevronDown size={40} color="white" />
        </div>
        <Marquee speed={speed}>
          {[...images, ...images].map((src, i) => (
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
        className="max-w-4xl mx-auto px-4 pt-12 py-24 text-center"
      >
        <img src={logo3} alt="Wedding Logo" className="h-45 w-auto mx-auto" />
        <p className="text-lg leading-relaxed font-light sm:w-2xl mx-auto ">
          {t.welcome}
        </p>
        <br />
        <p className="text-lg leading-relaxed font-light sm:w-2xl mx-auto ">
          {t.details}
        </p>
      </div>

      {/* Our Story */}
      <div className="bg-zinc-50">
        <div className="max-w-4xl mx-auto py-24 text-center">
          <h2 className="text-[50px] sm:text-7xl mb-12 text-center">
            {t.story}
          </h2>

          <div className="space-y-16">
            {/* How We Met */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-8 flex items-center justify-center">
                <h3 className="text-3xl  italic">{t.howWeMet}</h3>
              </div>
              <div className="h-px w-[70%] mx-auto bg-gray-700 sm:h-50 sm:w-px sm:text-center"></div>
              <div className="sm:w-1/2 p-8 text-left">
                <p className="text-lg leading-relaxed ">{t.howWeMetText}</p>
              </div>
            </div>

            {/* The Proposal */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-8 flex items-center justify-center">
                <h3 className="text-3xl  italic">{t.proposal}</h3>
              </div>
              <div className="h-px w-[70%] mx-auto bg-gray-700 sm:h-50 sm:w-px sm:text-center"></div>
              <div className="sm:w-1/2 p-8 text-left">
                <p className="text-lg leading-relaxed ">{t.proposalText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details & RSVP CTA */}
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="flex justify-around flex-col sm:flex-row-reverse">
          <div>
            <p className="text-5xl font-light italic">{t.date}</p>
          </div>
        </div>
        <Countdown code={language.code} translation={t} />
      </div>

      <div className="bg-zinc-50 py-2">
        <Marquee gradient={false} speed={100} pauseOnHover={true}>
          {[t.saveTheDateText, t.saveTheDateText, t.saveTheDateText].map(
            (text, i) => (
              <p
                key={i}
                className="text2xl font-semibold uppercase tracking-widest mr-50 cursor-pointer"
              >
                {text}
              </p>
            )
          )}
        </Marquee>
      </div>
    </section>
  );
}
