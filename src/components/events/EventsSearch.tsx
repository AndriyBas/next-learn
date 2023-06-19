"use client";

import Button from "../ui/Button";
import styles from "./EventsSearch.module.css";
import { useRouter } from "next/navigation";

interface EventsSearchProps {
  onSearch?: (year: string, month: string) => void;
}

const EventsSearch: React.FC<EventsSearchProps> = ({ onSearch }) => {
  const router = useRouter();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const els = event.currentTarget.elements;
    const year = (els.namedItem("year") as HTMLSelectElement).value;
    const month = (els.namedItem("month") as HTMLSelectElement).value;
    // console.log(year, month);
    onSearch && onSearch(year, month);
    router.push(`/events/${year}/${month}`);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" name="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month"></label>
          <select id="month" name="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find events</Button>
    </form>
  );
};

export default EventsSearch;
