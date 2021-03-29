import { Component } from "react";
import { Burger, BurgerIngredients } from "../../components/Burger/Burger";
import { BuildControls, PurchaseHandler } from "../../components/BuildControls/BuildControls";
import { BuildControlClickHandler } from "../../components/BuildControls/BuildControl/BuildControl";
import { isValidIngredient } from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import { Modal, ModalCloseHandler } from "../../components/UI/Modal/Modal";
import { OrderSummary, OrderSummaryItem } from "../../components/Burger/OrderSummary/OrderSummary";
import { Button, DefaultButtonClickHandler } from "../../components/UI/Button/Button";

type BurgerBuilderProps = {}

type BurgerBuilderState = {
  ingredients: BurgerIngredients;
  purchasing: boolean;
  totalPrice: number;
};

const BURGER_BASE_PRICE_IN_DOLLARS = 6;

export class BurgerBuilder extends Component<BurgerBuilderProps, BurgerBuilderState> {
  state: BurgerBuilderState = {
    ingredients: {
      lettuce: {
        count: 0,
        price: 0.50
      },
      bacon: {
        count: 0,
        price: 1
      },
      cheese: {
        count: 0,
        price: 0.75
      },
      meat: {
        count: 0,
        price: 2.5
      }
    },
    purchasing: false,
    totalPrice: BURGER_BASE_PRICE_IN_DOLLARS
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

  convertToIngredientToCountMap = (burgerIngredients: BurgerIngredients): Record<string, number> => {
    const ingredientToCountMap: Record<string, number> = {};
    Object.keys(burgerIngredients).forEach((key) => {
      if (isValidIngredient(key)) {
        ingredientToCountMap[key] = burgerIngredients[key].count;
      }
    });
    return ingredientToCountMap;
  };

  convertToOrderSummaryItems = (burgerIngredients: BurgerIngredients): OrderSummaryItem[] => {
    const orderSummaryItems: OrderSummaryItem[] = [];
    Object.keys(burgerIngredients).forEach((ingredient) => {
      if (isValidIngredient(ingredient)) {
        const { count, price } = burgerIngredients[ingredient];
        orderSummaryItems.push({ name: ingredient, count, price });
      }
    });
    return orderSummaryItems;
  };

  continuePurchaseHandler: DefaultButtonClickHandler = () => alert("Not implemented yet!")

  cancelPurchaseHandler: DefaultButtonClickHandler  = (e) => {
    e.preventDefault();
    this.setState({ purchasing: false });
  }

  purchaseHandler: PurchaseHandler = () => this.setState({ purchasing: true });

  render() {
    return (
      <>
        <Modal
          show={this.state.purchasing}
          close={this.cancelPurchaseHandler}>
          <OrderSummary
            title={"Your Order"}
            description={"A delicious burger with the following ingredients:"}
            items={this.convertToOrderSummaryItems(this.state.ingredients)}
            totalPrice={this.state.totalPrice}
          />
          <Button clickHandler={this.cancelPurchaseHandler} type={"Danger"}>CANCEL</Button>
          <Button clickHandler={this.continuePurchaseHandler} type={"Success"}>CONTINUE</Button>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          items={this.convertToIngredientToCountMap(this.state.ingredients)}
          addHandler={this.addHandler}
          removeHandler={this.removeHandler}
          price={this.state.totalPrice}
          purchaseHandler={this.purchaseHandler}/>
      </>
    );
  }
}