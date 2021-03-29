import classes from "./Layout.module.scss";
import { ReactNode } from "react";
import { Toolbar } from "../Navigation/Toolbar/Toolbar";

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  // TODO: Create Toolbar, Sidebar, and Backdrop components.
  return (
    <>
      <Toolbar/>
      <main className={classes.content}>
        {children}
      </main>
    </>
  );
};