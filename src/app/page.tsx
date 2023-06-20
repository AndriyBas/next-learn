import * as React from "react";
import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/client/api-client";

export default async function Home() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents);

  return <EventList items={featuredEvents} />;
}
