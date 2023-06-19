import * as React from "react";
import Link from "next/link";
import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link className={styles.btn} href={link}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
