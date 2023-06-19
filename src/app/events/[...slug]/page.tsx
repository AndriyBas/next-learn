import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getFilteredEvents } from "@/data/dummy";

interface EventDetailsProps {
  params: { slug: string[] };
}

const FilteredEvents: React.FC<EventDetailsProps> = ({ params: { slug } }) => {
  const year = parseInt(slug[0]);
  const month = parseInt(slug[1]);

  //   .alert {
  //   margin: 1rem auto;
  //   padding: 1rem 2rem;
  //   width: 90%;
  //   max-width: 40rem;
  //   background-color: #d5bdfc;
  //   color: #38028d;
  //   font-weight: bold;
  //   font-size: 1.5rem;
  //   text-align: center;
  //   border-radius: 6px;
  // }

  if (isNaN(year) || isNaN(month) || month > 12 || month < 1 || year < 2020) {
    return (
      <>
        <ErrorAlert>
          <p className="text-center p-6">
            Not valid params. Year and months are required in the format
            /2023/12/
          </p>
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </>
    );
  }
  const events = getFilteredEvents(year, month);
  if (!events.length) {
    return (
      <>
        <ErrorAlert>
          <p className="text-center p-6">
            No events found fot the given filter.
          </p>
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList items={events} />;
    </>
  );
};

export default FilteredEvents;
