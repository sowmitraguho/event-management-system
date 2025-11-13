import ExploreBtn from "@/components/Buttons/ExploreBtn";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="text-center"> The Hub for Every Dev Event <br /> You Mustn't Miss </h1>
      <p className="text-center mt-5">Hackathons, Conferences, Meetups, and More, All in One Place</p>

      <ExploreBtn />
    </section>
  );
}
