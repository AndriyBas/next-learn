import * as React from "react";
// import classes from "./_event-content.module.css";

interface EventContentProps {
  children: React.ReactNode;
}

const EventContent: React.FC<EventContentProps> = ({ children }) => {
  return (
    <section className="w-[90%] max-w-[40em] m-auto mt-[8rem] text-center text-2xl text-[#3a3a3a]">
      {children}
    </section>
  );
};

export default EventContent;
