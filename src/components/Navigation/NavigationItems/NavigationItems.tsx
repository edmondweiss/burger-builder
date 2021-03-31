import classes from "./NavigationItems.module.scss";
import { NavigationItem } from "./NavigationItem/NavigationItem";


export const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem
      active
      url={"/"}>Burger Builder</NavigationItem>
    <NavigationItem
      url={"/"}>Checkout</NavigationItem>
  </ul>
);