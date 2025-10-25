import Marquee from 'react-fast-marquee';
import travelCollage from '../assets/travelCollage.png';

const images = [travelCollage];

export default function TravelPage() {
  return (
    <div className="mx-auto pt-4 sm:pt-0">
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

      <div className="text-center mt-12 sm:mt-24 mb-12 mx-4 border-gray-200">
        <p className="text-[40px] sm:text-6xl mb-12">Travel & Accommodations</p>
        <p className="text-lg font-light sm:w-3xl mx-auto">
          We’re so excited to welcome you to{' '}
          <span className="font-bold">Dhërmi, Albania</span> for our wedding! To
          help make your travel planning easier, we’ve gathered a few details
          below. We’ll continue to update this page and send text messages as
          information is finalized so you’ll always have the latest details.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          <h3 className="text-2xl sm:text-3xl mb-6">Hotel Accommodations</h3>
          <div className="sm:w-3xl mx-auto px-4">
            <p className="">
              If you’re planning to stay at{' '}
              <span className="font-bold">Zoe Hora</span>, we’ll be sharing more
              details soon about how to access our special discounted rates as
              our guests — so stay tuned! There are also several lovely hotels
              and villas nearby in Dhërmi and neighboring coastal towns.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          {/* <h2 className="text-5xl">Hotel Accommodations</h2> */}
          <h3 className="text-2xl sm:text-3xl mb-6">Getting There</h3>
          <div className="sm:w-3xl mx-auto px-4">
            <p>
              The nearest airport is Tirana International Airport (TIA), about a
              2.5-hour drive from our wedding location. We recommend planning
              your travel accordingly. We’ll share more tips soon about
              transportation options and car rentals to make your journey as
              smooth as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          <h3 className="text-2xl sm:text-3xl mb-6">Exploring the South</h3>
          <div className="sm:w-3xl mx-auto px-4">
            <p>
              We encourage you to take time to explore Albania’s breathtaking
              southern coast. Vlorë, Himare, Sarandë, and Ksamil are some of the
              many areas that offer beautiful beaches, charming seaside
              restaurants, and incredible views.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          {/* <h2 className="text-5xl">Hotel Accommodations</h2> */}
          <h3 className="text-2xl sm:text-3xl mb-6">Travel Tips</h3>
          <div className="sm:w-3xl mx-auto px-4">
            <ul>
              <li>
                <span className="font-bold">Currency:</span> Albanian Lek (ALL)
                or Euro
              </li>
              <li>
                <span className="font-bold">Weather:</span> Expect warm, sunny
                days in Dhërmi during the summer
              </li>
              <li>
                <span className="font-bold">Driving:</span> Roads along the
                coast are scenic but winding — plan extra time for travel
              </li>
              <li>
                <span className="font-bold">Language:</span> English is commonly
                spoken in tourist areas
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Collage section */}
      <Marquee speed={50}>
        {[...images, ...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`wedding-${i}`}
            className="h-[50vh] w-auto object-cover my-24"
          />
        ))}
      </Marquee>
    </div>
  );
}
