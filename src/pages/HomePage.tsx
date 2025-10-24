// import { Heart, Calendar, MapPin } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import Countdown from '../components/Countdown';
import logo3 from '../assets/logos/3.png';

const images = [
  '/src/assets/forehead-kiss.jpg',
  '/src/assets/kissing.JPG',
  '/src/assets/hugging.jpg',
  '/src/assets/standing.JPG',
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

        <Marquee speed={150}>
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
      <div className="max-w-4xl mx-auto px-4 pt-12 py-24 text-center">
        <img src={logo3} alt="Wedding Logo" className="h-45 w-auto mx-auto" />
        <p className="text-lg leading-relaxed font-light sm:w-2xl mx-auto playfair">
          Welcome to our wedding website! We hope this site serves as a helpful
          guide as you prepare to join us for our special day. We feel
          incredibly lucky to be surrounded by such wonderful friends and
          family, and we're so grateful to celebrate this milestone with you.
        </p>
        <br />
        <p className="text-lg leading-relaxed font-light sm:w-2xl mx-auto playfair">
          Details are still being finalized, and we'll continue to update this
          site as plans come together. Formal invitations will be sent out in
          early 2026.
        </p>
      </div>

      {/* Our Story */}
      <div className="bg-zinc-50">
        <div className="max-w-4xl mx-auto py-24 text-center">
          <h2 className="text-5xl sm:text-7xl mb-12 text-center">Our Story</h2>

          <div className="space-y-16">
            {/* How We Met */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-8 flex items-center justify-center">
                <h3 className="text-3xl playfair italic">How We Met</h3>
              </div>
              <div className="h-px w-[70%] mx-auto bg-gray-700 sm:h-50 sm:w-px sm:text-center"></div>
              <div className="sm:w-1/2 p-8 text-left">
                <p className="text-lg leading-relaxed playfair">
                  High school physics class — a class neither of us expected to
                  change our lives. She noticed me first when I walked in late
                  on the very first day, and I noticed her the next day from the
                  seat behind her. A simple compliment about her shirt sparked
                  endless conversations, shared laughter, and a connection that
                  felt as natural as gravity. What started in a classroom has
                  turned into a lifelong equation for love.
                </p>
              </div>
            </div>

            {/* The Proposal */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 p-8 flex items-center justify-center">
                <h3 className="text-3xl playfair italic">The Proposal</h3>
              </div>
              <div className="h-px w-[70%] mx-auto bg-gray-700 sm:h-50 sm:w-px sm:text-center"></div>
              <div className="sm:w-1/2 p-8 text-left">
                <p className="text-lg leading-relaxed playfair">
                  During our summer trip to Albania, her first time visiting and
                  meeting my family, she thought we were just going to dinner.
                  Instead, I led her to a private oceanview setup with flowers
                  overlooking the water. As the sun set and the waves whispered
                  below, I asked her to marry me — what she thought would be a
                  simple dinner turned into a night we’ll remember forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details & RSVP CTA */}
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="flex justify-around flex-col sm:flex-row-reverse">
          <div>
            <p className="text-5xl font-light italic">
              August 1, <span className="playfair">2026</span>
            </p>
          </div>
        </div>
        <Countdown />
      </div>

      <div className="bg-zinc-50 py-2">
        <Marquee gradient={false} speed={100} pauseOnHover={true}>
          {[
            'Save the date — August 1, 2026',
            'Save the date — August 1, 2026',
            'Save the date — August 1, 2026',
          ].map((text, i) => (
            <p
              key={i}
              className="text2xl font-semibold uppercase tracking-widest mr-50 cursor-pointer"
            >
              {text}
            </p>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
