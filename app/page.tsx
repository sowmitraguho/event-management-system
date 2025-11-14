import ExploreBtn from "@/components/Buttons/ExploreBtn";
import EventCard from "@/components/EventCard/EventCard";
import { events } from "@/lib/constant";




export default function Home() {
  return (
    <section>
      <h1 className="text-center text-linear text-6xl font-semibold max-sm:text-4xl"> The Hub for Every Dev Event <br /> You Mustn't Miss </h1>
      <p className="text-center mt-5">Hackathons, Conferences, Meetups, and More, All in One Place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3 className="font-schibsted-grotesk text-2xl font-bold">Featured Events</h3>
        <div className='grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1'>
          {
          events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))
        }
        </div>
        
        </div>
    </section>
  );
}
