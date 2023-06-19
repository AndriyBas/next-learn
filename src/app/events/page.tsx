import * as React from "react";
import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/data/dummy";
import EventsSearch from "@/components/events/EventsSearch";

const AllEvents: React.FC = () => {
  const allEvents = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEvents;
