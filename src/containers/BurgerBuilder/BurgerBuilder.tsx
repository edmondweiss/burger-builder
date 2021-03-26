import { Component } from "react";
import { Burger, BurgerProps } from "../../components/Burger/Burger";

type BurgerBuilderProps = {}

type BurgerBuilderState = {
  ingredients: BurgerProps["ingredients"];
};

export class BurgerBuilder extends Component<BurgerBuilderProps, BurgerBuilderState> {

  // constructor(props: BurgerBuilderProps) {
  //   super(props);
  // }

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  };


  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <div>BurgerControls</div>
      </>
    );
  }
}