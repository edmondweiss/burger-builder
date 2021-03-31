import classes from "./NavigationItem.module.scss";
import { ReactNode } from "react";

type NavigationItemProps = {
  children: ReactNode;
  url: string;
  active?: boolean;
}

export const NavigationItem = ({ active = false, children, url }: NavigationItemProps) => (
  <li className={classes.NavigationItem}>
    <a
      href={url}
      className={(active) ? classes.active : undefined}>{children}</a>
  </li>
);