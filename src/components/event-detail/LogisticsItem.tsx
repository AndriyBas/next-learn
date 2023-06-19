import * as React from "react";
import classes from "./logistics-item.module.css";

interface LogisticsItemProps {
  icon: () => JSX.Element;
  children: React.ReactNode;
}

const LogisticsItem: React.FC<LogisticsItemProps> = ({ icon, children }) => {
  // const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon()}</span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
