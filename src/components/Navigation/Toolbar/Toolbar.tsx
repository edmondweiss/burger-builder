import classes from "./Toolbar.module.scss";
import { Logo } from "../../Logo/Logo";

type ToolbarProps = {}

export const Toolbar = ({}: ToolbarProps) => (
  <div className={classes.Toolbar}>
    <div>MENU</div>
    <Logo/>
    <nav>
      <ul>
        ...
      </ul>
    </nav>
  </div>
);