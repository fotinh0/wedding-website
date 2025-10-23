import { MapPin, Hotel, Plane, Car, Info } from 'lucide-react';

export default function TravelPage() {
  const hotels = [
    {
      name: 'Riverside Inn',
      distance: '0.2 miles from venue',
      phone: '(555) 123-4567',
      website: 'riversideinn.com',
      note: 'Special wedding rate available',
    },
    {
      name: 'Garden Suites Hotel',
      distance: '0.5 miles from venue',
      phone: '(555) 234-5678',
      website: 'gardensuiteshotel.com',
      note: 'Complimentary breakfast included',
    },
    {
      name: 'Downtown Plaza Hotel',
      distance: '2 miles from venue',
      phone: '(555) 345-6789',
      website: 'downtownplaza.com',
      note: 'Near restaurants and shopping',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-20 border-b border-gray-200 pb-12">
        <div className="w-px h-16 bg-black mx-auto mb-8"></div>
        <h1 className="text-6xl md:text-7xl font-serif font-light text-black mb-6 tracking-wide">
          Travel & Accommodations
        </h1>
        <p className="text-xl text-gray-600 font-light tracking-wide">
          Everything you need to know for your trip
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-gray-50 border border-gray-200 p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-black text-white p-4">
              <MapPin className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-serif font-light text-black tracking-wide">
              Venue Location
            </h2>
          </div>
          <div className="space-y-3 text-gray-600 font-light">
            <p className="font-medium text-black">Riverside Gardens</p>
            <p>123 Garden Lane</p>
            <p>Riverside, California 92501</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-black hover:text-gray-600 font-light border-b border-black"
            >
              View on Google Maps →
            </a>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-black text-white p-4">
              <Car className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-serif font-light text-black tracking-wide">
              Parking
            </h2>
          </div>
          <div className="space-y-3 text-gray-600 font-light">
            <p>Free parking is available on-site for all guests.</p>
            <p>Valet service will be provided at the main entrance.</p>
            <p className="pt-2 text-sm text-gray-500">
              For guests with accessibility needs, please contact us in advance.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-10 mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-black text-white p-4">
            <Plane className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-serif font-light text-black tracking-wide">
            Getting There
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-black mb-3 tracking-wide">
              By Air
            </h3>
            <p className="text-gray-600 text-sm font-light">
              Ontario International Airport (ONT) is 15 miles away. Los Angeles
              International Airport (LAX) is 60 miles away.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-black mb-3 tracking-wide">
              By Car
            </h3>
            <p className="text-gray-600 text-sm font-light">
              The venue is easily accessible from I-215 and SR-60. GPS
              coordinates: 33.9533° N, 117.3962° W
            </p>
          </div>
          <div>
            <h3 className="font-medium text-black mb-3 tracking-wide">
              Rideshare
            </h3>
            <p className="text-gray-600 text-sm font-light">
              Uber and Lyft are readily available in the area. Set your
              destination to "Riverside Gardens."
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-black text-white p-4">
            <Hotel className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-serif font-light text-black tracking-wide">
            Recommended Hotels
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-8 hover:bg-white transition-colors"
            >
              <h3 className="text-2xl font-serif font-light text-black mb-4 tracking-wide">
                {hotel.name}
              </h3>
              <div className="space-y-2 text-sm text-gray-600 font-light">
                <p className="flex items-start gap-2">
                  <MapPin
                    className="w-4 h-4 text-black flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span>{hotel.distance}</span>
                </p>
                <p>📞 {hotel.phone}</p>
                <p>🌐 {hotel.website}</p>
                <p className="pt-3 text-black font-medium">{hotel.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white p-12">
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
      </div>
    </div>
  );
}
