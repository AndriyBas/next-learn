import { Event } from "@/data/Event";
import Link from "next/link";
import * as React from "react";

interface EventItemProps {
  item: Event;
}

const EventItem: React.FC<EventItemProps> = ({ item }) => {
  const { title, image, date, location, id } = item;

  const humanDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replaceAll(", ", "\n");

  return (
    <li className="">
      <img src={"/" + image} alt={title} width={300} height={300} />

      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
