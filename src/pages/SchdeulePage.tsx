import happiness from '../assets/happiness.png';
import happinessMobile from '../assets/happinessMini.png';

export default function SchedulePage() {
  return (
    <div className="mx-auto">
      <img
        src={happinessMobile}
        alt="schedule-collage"
        className="h-fit sm:max-h-[60vh] mx-auto sm:hidden"
      />
      <img
        src={happiness}
        alt="schedule-collage"
        className="hidden sm:block h-fit sm:max-h-[60vh] mx-auto"
      />
      <div className="max-w-5xl mx-auto text-center px-4 my-16 sm:my-24">
        <div className="flex flex-col justify-center">
          <p className="text-[40px] sm:text-6xl mb-8 italic">Wedding Day</p>
          <p className="tracking-wide font-light">
            We can't wait to celebrate with you! Below is a glimpse of the
            events for our special day. Details are still being finalized, so
            please check back here for updates as the plans come together.
          </p>
        </div>
      </div>

      <div className="sm:py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto py-8">
          <div className="relative flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/5 p-8 flex justify-end text-center">
              <h3 className="text-3xl italic">Ceremony</h3>
            </div>
            <div className="sm:w-3/5 pt-0 pb-8 px-8 sm:pb-10 sm:pt-8 text-center sm:text-left sm:border-l">
              <p className="text-lg leading-relaxed">
                The ceremony will take place at{' '}
                <span className="font-bold">Zoe Hora</span> in Dhërmi, Albania.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col sm:flex-row">
            <div className="sm:w-2/5 p-8 flex items-center text-center justify-end">
              <h3 className="text-3xl italic">Reception & Celebration</h3>
            </div>
            <div className="sm:w-3/5 pt-0 pb-8 px-8 sm:pb-10 sm:pt-8 text-center sm:text-left sm:border-l">
              <p className="text-lg leading-relaxed">
                Dinner, drinks, and dancing will follow the ceremony. We’ll
                share more details here once everything is finalized. Come ready
                to eat, toast, and dance the night away with us!
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/5 p-8 flex items-center justify-end text-center">
              <h3 className="text-3xl italic">Other Events</h3>
            </div>

            <div className="sm:w-3/5 pt-0 pb-8 px-8 sm:pb-10 sm:pt-8 text-center sm:text-left sm:border-l">
              <p className="text-lg leading-relaxed">
                We may host a welcome party or other gatherings around the
                wedding. Details for these events will be shared here soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
