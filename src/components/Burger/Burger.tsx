import styles from "./Burger.module.scss";
import { BurgerIngredient, BurgerIngredientType } from "./BurgerIngredient/BurgerIngredient";
import { nanoid } from "nanoid";
import React, { ReactNode } from "react";


type IngredientCount = number;

export type BurgerProps = Readonly<{
  ingredients: {
    [key in Exclude<BurgerIngredientType, "bread-top" | "bread-bottom">]: IngredientCount;
  }
}>;

export const Burger = ({ ingredients }: BurgerProps) => {
  const validIngredientsSet = new Set<BurgerIngredientType>([
    "bacon",
    "bread-top",
    "bread-bottom",
    "cheese",
    "meat",
    "salad"
  ]);


  const isValidIngredient = (ingredient: string): ingredient is BurgerIngredientType =>
    validIngredientsSet.has(ingredient as BurgerIngredientType);

  const createIngredientComponents = (ingredient: BurgerProps["ingredients"]): ReactNode[] | null => {
    let ingredientComponents: React.ReactNode[] | null = [];
    for (const [ingredientType, ingredientCount] of Object.entries(ingredients)) {
      if (!isValidIngredient(ingredientType)) {
        continue;
      }
      for (let i = 0; i < ingredientCount; i++) {
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
