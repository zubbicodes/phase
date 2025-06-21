'use client';

import { Tilt } from "../ui/tilt";
import { Spotlight } from "../ui/spotlight";

const events = [
  {
    title: "2023 FASHION EXPO",
    date: "October 18, 2024",
    image: "/events/1.jpeg",
    description: "A week of sustainable fashion innovation and networking. Industry leaders gathered to discuss cutting-edge sustainable practices and shape the future of fashion manufacturing.",
  },
  {
    title: "2024 TAISPO",
    date: "March 6-9, 2024",
    image: "/events/2.jpeg",
  },
  {
    title: "2023 TITAS",
    date: "October 17-19, 2023",
    image: "/events/event.jpeg",
  },
  {
    title: "2022 FASHION EXPO",
    date: "November 10, 2023",
    image: "/events/3.jpeg",
  },
];

const SideEventCard = ({ event }: { event: typeof events[0] }) => {
  return (
    <div className="flex items-center space-x-6 mb-10 last:mb-0">
      <img
        src={event.image}
        alt={event.title}
        className="w-48 h-28 object-cover rounded-md flex-shrink-0"
      />
      <div>
        <h3 className="font-bold text-white text-2xl mb-2">
          {event.title}
        </h3>
        <p className="text-gray-400 text-lg">{event.date}</p>
      </div>
    </div>
  );
};

const EventSection = () => {
  const mainEvent = events[0];
  const sideEvents = events.slice(1, 4);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Event - Left Column */}
          <div className="w-full lg:w-2/3">
            <Tilt
              rotationFactor={6}
              isRevese
              style={{
                transformOrigin: 'center center',
              }}
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
              className='group relative rounded-lg overflow-hidden'
            >
              <Spotlight
                className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
                size={248}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
              />
              <div className="relative">
                <img
                  src={mainEvent.image}
                  alt={mainEvent.title}
                  className='w-full h-[60vh] object-cover grayscale duration-700 group-hover:grayscale-0'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute top-8 left-8 text-white'>
                  <p className='text-lg font-bold'>18</p>
                  <p className='text-sm'>October</p>
                  <p className='text-sm'>2024</p>
                </div>
                <div className='absolute bottom-8 left-8 p-4 text-white'>
                  <h3 className='font-bold text-3xl md:text-4xl mb-4'>{mainEvent.title}</h3>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full inline-flex items-center">
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Side Events - Right Column */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <div>
              {sideEvents.map((event, index) => (
                <SideEventCard key={index} event={event} />
              ))}
            </div>

            {/* Navigation and More News */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                <div className="w-12 h-0.5 bg-gray-600" />
                <button className="p-2 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
              </div>
              <a href="#" className="text-red-600 hover:underline text-sm font-bold">MORE NEWS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection; 