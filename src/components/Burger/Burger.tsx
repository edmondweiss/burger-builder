import styles from "./Burger.module.scss";
import { BurgerIngredient, BurgerIngredientType } from "./BurgerIngredient/BurgerIngredient";

type BurgerProps = Readonly<{
  ingredients: BurgerIngredientType[]
}>;

export const Burger = ({ ingredients }: BurgerProps) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={"bread-top"}/>
      <BurgerIngredient type={"cheese"}/>
      <BurgerIngredient type={"meat"}/>
      <BurgerIngredient type={"bread-bottom"}/>
    </div>
  )
};