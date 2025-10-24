import collage from '../assets/collage.png';

export default function SchedulePage() {
  return (
    <div className="mx-auto">
      <div className="max-w-5xl mx-auto text-center mt-12 border-b border-gray-200 pb-12 flex gap-6">
        <img src={collage} alt="hugging" className="w-1/2 h-auto" />
        <div className="flex flex-col justify-center">
          <h2 className="text-7xl mt-12 my-8">Wedding Day</h2>
          <p className="tracking-wide font-light">
            We can't wait to celebrate with you! Below is a glimpse of the
            events for our special day. Details are still being finalized, so
            please check back here for updates as the plans come together.
          </p>
        </div>
      </div>

      <div className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/2 p-8 flex justify-center sm:justify-end">
              <h3 className="text-3xl playfair italic">Ceremony</h3>
            </div>

            <div className="sm:w-1/2 p-8 text-left border-l">
              <p className="text-lg leading-relaxed playfair">
                The ceremony will take place at{' '}
                <span className="font-bold">Zoe Hora</span> in Dhërmi, Albania.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/2 p-8 flex items-center justify-center sm:justify-end">
              <h3 className="text-3xl playfair italic">
                Reception & Celebration
              </h3>
            </div>

            <div className="sm:w-1/2 p-8 text-left border-l">
              <p className="text-lg leading-relaxed playfair">
                Dinner, drinks, and dancing will follow the ceremony. We’ll
                share more details here once everything is finalized. Come ready
                to eat, toast, and dance the night away with us!
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/2 p-8 flex items-center justify-center sm:justify-end">
              <h3 className="text-3xl playfair italic">Other Events</h3>
            </div>

            <div className="sm:w-1/2 p-8 text-left border-l">
              <p className="text-lg leading-relaxed playfair">
                We may host a welcome party or other gatherings around the
                wedding. Details for these events will be shared here closer to
                the date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
