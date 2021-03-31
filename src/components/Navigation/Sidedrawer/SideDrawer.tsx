import classes from "./SideDrawer.module.scss";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { Logo } from "../../Logo/Logo";
import { Backdrop } from "../../UI/Backdrop/Backdrop";
import { MouseEventHandler } from "react";

type SideDrawerProps = {
  onBackdropClick: MouseEventHandler;
  show: boolean;
}

export const SideDrawer = ({ onBackdropClick, show }: SideDrawerProps) => {
  let dynamicClasses = [classes.SideDrawer, show ? classes.Open : classes.Close].join(" ");
  return (
    <>
      <Backdrop
        click={onBackdropClick}
        show={show}
      />
      <div className={dynamicClasses}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </>
  );
};