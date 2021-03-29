import classes from "./Toolbar.module.scss";

type ToolbarProps = {}

export const Toolbar = ({}: ToolbarProps) => (
  <div className={classes.Toolbar}>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>
      <ul>
        ...
      </ul>
    </nav>
  </div>
);