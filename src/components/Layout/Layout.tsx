import classes from "./Layout.module.scss";
import { Component, ReactNode } from "react";
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
import { SideDrawer } from "../Navigation/Sidedrawer/SideDrawer";

type LayoutProps = {
  children: ReactNode;
}

type LayoutState = {
  showSideDrawer: boolean;
}

export class Layout extends Component<LayoutProps, LayoutState> {
  // TODO: Create Toolbar, Sidebar, and Backdrop components.
  state: LayoutState = {
    showSideDrawer: false
  };

  toggleSideBar = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer
    }));
  };

  hideSideBar = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  render() {
    return (
      <>
        <Toolbar onDrawerTogglerClick={this.toggleSideBar}/>
        <SideDrawer
          show={this.state.showSideDrawer}
          onBackdropClick={this.hideSideBar}/>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </>
    );
  }
}