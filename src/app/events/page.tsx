import * as React from "react";
import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/client/api-client";
import EventsSearch from "@/components/events/EventsSearch";

export const revalidate = 60; // seconds
export const metadata = {
  title: "All Next Events",
  description: "All interesting events in the area",
};

const AllEvents: React.FC = async () => {
  const allEvents = await getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEvents;
