import { Event } from "@/data/Event";
import * as React from "react";
import EventItem from "./EventItem";

// import styles from "./EventList.module.css"; // changed this style to Tailwind Css

interface EventListProps {
  items: Event[];
}

const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className="w-[90%] max-w-[40rem] mt-20 mb-20">
      {/* <ul className={styles.list}> */}
      {items.map((event) => (
        <EventItem key={event.id} item={event}></EventItem>
      ))}
    </ul>
  );
};

export default EventList;
