import * as React from "react";
import Link from "next/link";
import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ link, children }) => {
  return (
    <Link className={styles.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;
