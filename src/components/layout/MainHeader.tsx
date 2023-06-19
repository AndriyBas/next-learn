import * as React from "react";
import Link from "next/link";
import styles from "./MainHeader.module.css";

const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
