import Marquee from 'react-fast-marquee';
import travelCollage from '../assets/travelCollage.png';

const images = [travelCollage];

export default function TravelPage() {
  return (
    <div className="mx-auto sm:pt-12">
      <video
        className="max-h-[80vh] mx-auto"
        controls
        loop
        preload="auto"
        autoPlay
      >
        <source
          src={
            'https://palevioletred-guanaco-529765.hostingersite.com/wp-content/uploads/2025/03/zoe-hora-home-transcode.mp4'
          }
          type="video/mp4"
        />
      </video>

      <div className="text-center my-24 mx-6 border-gray-200">
        <p className="text-lg font-light sm:w-3xl mx-auto">
          We’re so excited to welcome you to{' '}
          <span className="font-bold">Dhërmi, Albania</span> for our wedding! To
          help make your travel planning easier, we’ve gathered a few details
          below. We’ll continue to update this page and send a text once
          additional travel and hotel information is finalized.
        </p>
      </div>

      {/* Collage section */}
      <Marquee speed={30}>
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`wedding-${i}`}
            className="h-[50vh] w-auto object-cover"
          />
        ))}
      </Marquee>

      <div className="pt-24 flex flex-col gap-12">
        <div className="flex flex-col justify-center text-center px-6">
          <h3 className="text-3xl playfair mb-6">Hotel Accommodations</h3>
          <div className="sm:w-3xl mx-auto">
            <p>
              If you’re planning to stay at Zoe Hora, we’ll be sharing more
              details soon about how to access our special discounted rates as
              our guests — so stay tuned! There are also several lovely hotels
              and villas nearby in Dhërmi and neighboring coastal towns.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          {/* <h2 className="text-5xl">Hotel Accommodations</h2> */}
          <h3 className="text-3xl playfair mb-6">Getting There</h3>
          <div className="sm:w-3xl mx-auto">
            <p>
              The nearest airport is Tirana International Airport (TIA), about a
              2.5-hour drive from our wedding location. We recommend planning
              your travel accordingly. We’ll share more tips soon about
              transportation options and car rentals to make your journey as
              smooth as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center px-6">
          <h3 className="text-3xl playfair mb-6">Exploring the South</h3>
          <div className="sm:w-3xl mx-auto">
            <p>
              We encourage you to take time to explore Albania’s breathtaking
              southern coast. Towns like Himarë, Vuno, and Sarandë offer
              beautiful beaches, charming seaside restaurants, and incredible
              views.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          {/* <h2 className="text-5xl">Hotel Accommodations</h2> */}
          <h3 className="text-3xl playfair mb-6">Travel Tips</h3>
          <div className="sm:w-3xl mx-auto">
            <ul>
              <li>
                <span className="font-bold">Currency:</span> Albanian Lek (ALL)
                or Euro
              </li>
              <li>
                <span className="font-bold">Driving:</span> Roads along the
                coast are scenic but winding — plan extra time for travel.
              </li>
              <li>
                <span className="font-bold">Language</span> English is commonly
                spoken in tourist areas.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="bg-black text-white p-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-white text-black p-4">
            <Info className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-serif font-light tracking-wide">
            Additional Information
          </h2>
        </div>
        <div className="space-y-6 text-gray-300 font-light">
          <p>
            <strong className="text-white">Weather:</strong> June in Riverside
            typically features sunny skies with temperatures around 85°F (29°C).
            We recommend bringing sunglasses and sunscreen for the outdoor
            ceremony.
          </p>
          <p>
            <strong className="text-white">Attire:</strong> Semi-formal/Cocktail
            attire. The ceremony will be outdoors on grass, so choose footwear
            accordingly.
          </p>
          <p>
            <strong className="text-white">Questions?</strong> If you need any
            assistance with travel arrangements or have questions, please don't
            hesitate to contact us at wedding@sarahandmichael.com
          </p>
        </div>
      </div> */}
    </div>
  );
}
