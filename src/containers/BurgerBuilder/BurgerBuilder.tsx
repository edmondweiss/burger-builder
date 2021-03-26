import { Component } from "react";
import { Burger } from "../../components/Burger/Burger";

type BurgerBuilderProps = {

}

type BurgerBuilderState = {

}

export class BurgerBuilder extends Component<BurgerBuilderProps, BurgerBuilderState> {
  render() {
    return (
      <>
        <Burger ingredients={["bread-top", "cheese", "meat", "bread-bottom"]}/>
        <div>BurgerControls</div>
      </>
    )
  }
}