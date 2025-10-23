import { MapPin, Wine, HouseHeart } from 'lucide-react';

export default function SchedulePage() {
  const schedule = [
    {
      icon: Wine,
      time: 'Time: TDB',
      title: 'Welcome Party',
      description: 'July 30, 2026',
      location: 'TBD',
    },
    {
      icon: HouseHeart,
      time: 'Time: TBD',
      title: 'Wedding',
      description: 'August 1, 2026',
      location: 'Zoe Hora',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-20 border-b border-gray-200 pb-12">
        <p className="tracking-wide font-light">
          We’re still finalizing all the details, so event times may change.
          Don’t worry — we’ll share the full schedule soon and make sure you
          have everything you need to plan your time with us.
        </p>
      </div>

      <div className="relative">
        {/* <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div> */}

        <div className="space-y-12">
          {schedule.map((event, index) => (
            <div key={index} className="relative">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-black text-white flex items-center justify-center relative z-10">
                  <event.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                <div className="flex-1 bg-gray-50 border border-gray-200 p-8 hover:bg-white transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-3xl font-serif font-light text-black tracking-wide">
                      {event.title}
                    </h3>
                    <span className="text-black font-light text-lg tracking-wide">
                      {event.time}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed font-light">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
