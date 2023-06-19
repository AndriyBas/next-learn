import * as React from "react";
import { getEventById } from "@/data/dummy";
import EventSummary from "@/components/event-detail/EventSummary";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventContent from "@/components/event-detail/EventContent";

interface EventDetailsProps {
  params: { eventId: string };
}

const EventDetail: React.FC<EventDetailsProps> = ({ params: { eventId } }) => {
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
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
