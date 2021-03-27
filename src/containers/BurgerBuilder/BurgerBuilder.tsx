import { Component } from "react";
import { Burger, BurgerIngredients} from "../../components/Burger/Burger";
import { BuildControls } from "../../components/BuildControls/BuildControls";
import { BuildControlClickHandler } from "../../components/BuildControls/BuildControl/BuildControl";
import { isValidIngredient } from "../../components/Burger/BurgerIngredient/BurgerIngredient";

type BurgerBuilderProps = {}

type BurgerBuilderState = {
  ingredients: BurgerIngredients;
  totalPrice: number;
};

export class BurgerBuilder extends Component<BurgerBuilderProps, BurgerBuilderState> {
  state: BurgerBuilderState = {
    ingredients: {
      salad: {
        count: 0,
        price: 0.4
      },
      bacon: {
        count: 0,
        price: 0.7
      },
      cheese: {
        count: 0,
        price: 0.5
      },
      meat: {
        count: 0,
        price: 2.4
      }
    },
    totalPrice: 6
  };

  addHandler: BuildControlClickHandler = (itemName) => {
    const lowerCaseItemName = itemName.toLowerCase();
    const updatedIngredients = { ...this.state.ingredients };
    let totalPrice = this.state.totalPrice;
    if (isValidIngredient(lowerCaseItemName)) {
      const ingredient = updatedIngredients[lowerCaseItemName];
      ++ingredient.count;
      totalPrice += ingredient.price;
    }
    this.setState({ ingredients: updatedIngredients, totalPrice });
  };

  removeHandler: BuildControlClickHandler = (itemName) => {
    const lowerCaseItemName = itemName.toLowerCase();
    const updatedIngredients = { ...this.state.ingredients };
    let totalPrice = this.state.totalPrice;
    if (isValidIngredient(lowerCaseItemName) && updatedIngredients[lowerCaseItemName].count > 0) {
      const ingredient = updatedIngredients[lowerCaseItemName];
      --ingredient.count;
      totalPrice -= ingredient.price;
    }
    this.setState({ ingredients: updatedIngredients, totalPrice });
  };

  convertToIngredientToCountMap = (state: BurgerIngredients): Record<string, number> => {
    const ingredientToCountMap: Record<string, number> = {};
    Object.keys(state).forEach((key) => {
      if (isValidIngredient(key)) {
        ingredientToCountMap[key] = state[key].count;
      }
    });
    return ingredientToCountMap;
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          items={this.convertToIngredientToCountMap(this.state.ingredients)}
          addHandler={this.addHandler}
          removeHandler={this.removeHandler}
          price={this.state.totalPrice}/>
      </>
    );
  }
}