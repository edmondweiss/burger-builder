import classes from "./Logo.module.scss";
import BurgerLogo from "../../assets/burger-logo.png";

export const Logo = () => (
  <div className={classes.Logo}>
    <img
      src={BurgerLogo}
      alt="Burger Logo"/>
  </div>
);
