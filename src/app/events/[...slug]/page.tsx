import * as React from "react";

interface EventDetailsProps {
  params: { slug: string[] };
}

const FilteredEvents: React.FC<EventDetailsProps> = ({ params: { slug } }) => {
  return (
    <div className="">
      <h1 className="text-3xl">Filtereed Events</h1>
      <div>Slug: {JSON.stringify(slug)}</div>
    </div>
  );
};

export default FilteredEvents;
