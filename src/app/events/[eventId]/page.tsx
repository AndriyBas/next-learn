import * as React from "react";
import { getAllEvents, getEventById } from "@/client/api-client";
import EventSummary from "@/components/event-detail/EventSummary";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventContent from "@/components/event-detail/EventContent";
import ErrorAlert from "@/components/ui/ErrorAlert";

interface EventDetailsProps {
  params: { eventId: string };
}

export async function generateStaticParams() {
  const events = await getAllEvents();
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
    </React.Fragment>
  );
};

export default EventDetail;
