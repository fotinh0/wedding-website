// import { Heart, Calendar, MapPin } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import Countdown from '../components/Countdown';
import logo from '../assets/logo.svg';

const images = [
  '/src/assets/_LOV4253.JPG',
  '/src/assets/_LOV4286.JPG',
  '/src/assets/_LOV4278.JPG',
  '/src/assets/_LOV4813.JPG',
  '/src/assets/_LOV4328.JPG',
  '/src/assets/_LOV4628.JPG',
];

export default function HomePage() {
  return (
    <section>
      <div className="relative overflow-hidden">
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white bg-black/5">
          <h2 className="text-6xl sm:text-8xl mb-2 text-center">
            We're getting married
          </h2>
        </div>

        <Marquee speed={100}>
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
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <img src={logo} alt="Wedding Logo" className="h-60 w-auto mx-auto" />
        <p className="text-lg leading-relaxed font-light">
          Welcome to our wedding website! We hope this site serves as a helpful
          guide as you prepare to join us for our special day. We feel
          incredibly lucky to be surrounded by such wonderful friends and
          family, and we're so grateful to celebrate this milestone with you.
        </p>
        <br />
        <p className="text-lg leading-relaxed font-light">
          Details are still being finalized, and we'll continue to update this
          site as plans come together. Formal invitations will be sent out early
          2026.
        </p>
      </div>

      {/* Date & Location + Countdown */}
      <div className="max-w-4xl mx-auto px-4 pt-8 py-24 text-center">
        <div className="flex justify-around mb-6 flex-col sm:flex-row-reverse">
          <div className="mb-8">
            <h2 className="text-6xl font-light">August 1</h2>
            <p className="my-4">2026</p>
          </div>
          <div>
            <h2 className="text-6xl font-light">Dhermi</h2>
            <p className="my-4">Albania</p>
          </div>
        </div>
        <Countdown />
      </div>

      {/* Our Story */}
      <div className="bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <h2 className="text-6xl sm:text-8xl mb-12 text-center">Our Story</h2>

          <div className="space-y-16">
            {/* How We Met */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-8 flex items-center justify-center">
                <h3 className="text-3xl sm:text-4xl">How We Met</h3>
              </div>
              <div className="h-[1px] w-[70%] mx-auto bg-gray-700 sm:h-70 sm:w-[1px] sm:text-center"></div>
              <div className="sm:w-1/2 p-8 text-left">
                <p className="leading-relaxed">
                  Our story began in high school physics class — the one class
                  neither of us expected to change our lives. I noticed Foti
                  first, walking in late on the very first day, while he noticed
                  me the next day when he took the seat right behind me. A
                  simple compliment about my shirt somehow turned into endless
                  conversations, shared laughter, and a connection that felt as
                  natural as gravity itself. What started as two students in
                  physics class has turned into a lifelong equation for love —
                  and now, we’re getting married.
                </p>
              </div>
            </div>

            {/* The Proposal */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-8 flex items-center justify-center">
                <h3 className="text-3xl sm:text-4xl">The Proposal</h3>
              </div>
              <div className="h-[1px] w-[70%] mx-auto bg-gray-700 sm:h-65 sm:w-[1px] sm:text-center"></div>
              <div className="sm:w-1/2 p-8 text-left">
                <p className="leading-relaxed">
                  On our very first full day in Albania, I wanted to make the
                  moment unforgettable. She thought we were just going out for
                  dinner in Sarandë, her first time visiting Albania and meeting
                  my family. With the help of my cousin Marinela, I secretly set
                  up a private oceanview spot as the sun was setting. There,
                  overlooking the waves, I asked her to marry me — so we could
                  spend the rest of our trip engaged — and she said yes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
