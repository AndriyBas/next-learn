import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/data/dummy";
import Link from "next/link";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-3xl">Featured events</h1>
      <div className="">
        <EventList items={featuredEvents} />
      </div>
    </main>
  );
}
