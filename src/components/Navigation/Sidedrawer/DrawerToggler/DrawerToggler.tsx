import classes from "./DrawerToggler.module.scss";
import { MouseEventHandler } from "react";


export type DrawerTogglerHandler = MouseEventHandler<HTMLDivElement>;

type DrawerTogglerProps = {
  onToggleClick: DrawerTogglerHandler;
}

export const DrawerToggler = ({ onToggleClick }: DrawerTogglerProps) => (
  <div
    className={classes.DrawerToggle}
    onClick={onToggleClick}>
    <div/>
    <div/>
    <div/>
  </div>
);