import { Event } from "@/data/Event";
import * as React from "react";
import EventItem from "./EventItem";

interface EventListProps {
  items: Event[];
}

const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <div className="center">
      <ul>
        {items.map((event) => (
          <EventItem key={event.id} item={event}></EventItem>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
