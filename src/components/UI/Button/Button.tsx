import classes from "./Button.module.scss";
import { MouseEventHandler, ReactNode } from "react";

export type DefaultButtonClickHandler = MouseEventHandler<HTMLButtonElement>;

export type ButtonType = "Danger" | "Success";

type ButtonProps = {
  children: ReactNode;
  clickHandler: DefaultButtonClickHandler;
  type: ButtonType;
}

export const Button = ({ children, clickHandler, type }: ButtonProps) =>
  <button
    className={[classes.Button, classes[type]].join(" ")}
    onClick={clickHandler}>{children}</button>;