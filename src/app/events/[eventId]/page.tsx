import * as React from "react";

interface EventDetailsProps {
  params: { eventId: string };
}

const EventDetail: React.FC<EventDetailsProps> = ({ params: { eventId } }) => {
  return (
    <div className="">
      <h1 className="text-3xl">Event details</h1>
      <div>ID: {eventId}</div>
    </div>
  );
};

export default EventDetail;
