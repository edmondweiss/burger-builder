import classes from "./Toolbar.module.scss";
import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { DrawerToggler, DrawerTogglerHandler } from "../Sidedrawer/DrawerToggler/DrawerToggler";

type ToolbarProps = {
  onDrawerTogglerClick: DrawerTogglerHandler;
}

export const Toolbar = ({ onDrawerTogglerClick }: ToolbarProps) => (
  <div
    className={classes.Toolbar}>
    <DrawerToggler onToggleClick={onDrawerTogglerClick}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </div>
);