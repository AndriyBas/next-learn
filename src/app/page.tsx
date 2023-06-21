import * as React from "react";
import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/client/api-client";
import NewsletterRegistration from "@/components/input/NewsletterRegistration";

export const revalidate = 1800;

export default async function Home() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </>
  );
}
