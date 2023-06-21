import * as React from "react";
import { getEventById, getFeaturedEvents } from "@/client/api-client";
import EventSummary from "@/components/event-detail/EventSummary";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventContent from "@/components/event-detail/EventContent";
import ErrorAlert from "@/components/ui/ErrorAlert";
import Comments from "@/components/input/Comments";

interface EventDetailsProps {
  params: { eventId: string };
}

export const revalidate = 1800; // 30 mins

export async function generateMetadata({
  params: { eventId },
}: {
  params: { eventId: string };
}) {
  const event = await getEventById(eventId);
  return {
    title: event?.title ?? "Not found event",
    description: event?.description,
  };
}

export async function generateStaticParams() {
  const events = await getFeaturedEvents();
  return events.map((e) => ({ eventId: e.id }));
}

const EventDetail: React.FC<EventDetailsProps> = async ({
  params: { eventId },
}) => {
  const event = await getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }

  return (
    <React.Fragment>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </React.Fragment>
  );
};

export default EventDetail;
