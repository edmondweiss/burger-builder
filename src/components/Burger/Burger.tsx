import styles from "./Burger.module.scss";
import { OptionalBurgerIngredient, isValidIngredient, BurgerIngredient } from "./BurgerIngredient/BurgerIngredient";
import { nanoid } from "nanoid";
import React, { ReactNode } from "react";


export type BurgerIngredients = {
  [key in OptionalBurgerIngredient]: {
    count: number;
    price: number;
  };
}

export type BurgerProps = Readonly<{
  ingredients: BurgerIngredients;
}>

export const Burger = ({ ingredients }: BurgerProps) => {

  const createIngredientComponents = (ingredients: BurgerIngredients): ReactNode[] | null => {
    let ingredientComponents: React.ReactNode[] | null = [];
    for (const ingredientType of Object.keys(ingredients)) {
      if (!isValidIngredient(ingredientType)) {
        continue;
      }
      const { count } = ingredients[ingredientType];
      for (let i = 0; i < count; i++) {
        ingredientComponents.push(<BurgerIngredient
          type={ingredientType}
          key={nanoid()}/>);
      }
    }
    if (ingredientComponents.length === 0) {
      ingredientComponents = null;
    }
    return ingredientComponents;
  };

  const ingredientComponents = createIngredientComponents(ingredients);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={"bread-top"}/>
      {ingredientComponents ?
        ingredientComponents :
        <p>Please start adding ingredients!</p>}
      <BurgerIngredient type={"bread-bottom"}/>
    </div>
  );
};
