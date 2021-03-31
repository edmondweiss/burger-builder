import classes from "./Backdrop.module.scss";
import { MouseEventHandler } from "react";

type BackdropClickHandler = MouseEventHandler<HTMLDivElement>;

type BackdropProps = {
  click: BackdropClickHandler;
  show: boolean;
}

export const Backdrop = ({ click, show }: BackdropProps) => (
  show ? <div
    className={classes.Backdrop}
    onClick={click}/> : null
);