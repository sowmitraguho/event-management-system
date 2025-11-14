import Image from "next/image";
import Link from "next/link";

interface props {
    slug: string,
    image: string,
    title: string,
    location: string,
    date: string,
    time: string,
}

const EventCard = ({ slug, title, image, location, date, time }: props) => {
    return (
        <Link href={`/events/${slug}`} className="flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg border border-dark-200">
            <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="h-[300px] w-full rounded-lg object-cover"
            />
            <div className="flex flex-row gap-2">
                <Image
                    src="/icons/pin.svg"
                    alt="Location Pin"
                    width={12}
                    height={12}
                />
                <p className="text-light-200 text-sm font-light">{location}</p>
            </div>
            <p className="text-[20px] font-semibold line-clamp-1">{title}</p>
            <div className=" text-light-200 flex flex-row flex-wrap items-center gap-4">
                <div className="flex flex-row gap-2">
                    <Image
                        src="/icons/calendar.svg"
                        alt="Calendar Icon"
                        width={12}
                        height={12}
                    />
                    <p className="text-light-200 text-sm font-light">{date}</p>
                </div>
                <div className="flex flex-row gap-2">
                    <Image
                        src="/icons/clock.svg"
                        alt="Clock Icon"
                        width={12}
                        height={12}
                    />
                    <p className="text-light-200 text-sm font-light">{time}</p>
                </div>
            </div>

        </Link>
    )
}

export default EventCard
