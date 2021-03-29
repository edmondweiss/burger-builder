import classes from "./Logo.module.scss";
import BurgerLogo from "../../assets/burger-logo.png";
type LogoProps = {}

export const Logo = ({}: LogoProps) => (
  <div className={classes.Logo}>
    <img
      src={BurgerLogo}
      alt="Burger Logo"/>
  </div>
);
