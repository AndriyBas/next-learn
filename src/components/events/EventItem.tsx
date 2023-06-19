import * as React from "react";
import { Event } from "@/data/Event";
import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./EventItem.module.css";

interface EventItemProps {
  item: Event;
}

const EventItem: React.FC<EventItemProps> = ({ item }) => {
  const { title, image, date, location, id } = item;

  const humanDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replaceAll(", ", "\n");

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} width={300} height={300} />

      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore events</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
