import classes from "./event-summary.module.css";

interface EventSummaryProps {
  title: string;
}

const EventSummary: React.FC<EventSummaryProps> = ({ title }) => {
  return (
    <section
      className={`w-full h-[30vh] bg-gradient-to-bl from-[#008b79] to-[#1180a1] ${classes.summary}`}
    >
      <h1 className="m-0 pt-12 text-[2rem] text-center text-white md:text-[5rem]">
        {title}
      </h1>
    </section>
  );
};

export default EventSummary;
