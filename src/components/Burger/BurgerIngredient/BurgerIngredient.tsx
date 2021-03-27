import styles from "./BurgerIngredient.module.scss";

export type RequiredBurgerIngredient = "bread-top" | "bread-bottom";

export type OptionalBurgerIngredient =
  "bacon"
  | "cheese"
  | "meat"
  | "salad";

export type BurgerIngredientType = RequiredBurgerIngredient | OptionalBurgerIngredient;

type BurgerIngredientProps = Readonly<{
  type: BurgerIngredientType;
}>;

export const optionalIngredientSet = new Set<OptionalBurgerIngredient>([
  "bacon",
  "cheese",
  "meat",
  "salad"
]);

export const isValidIngredient = (ingredient: string): ingredient is OptionalBurgerIngredient =>
  optionalIngredientSet.has(ingredient as OptionalBurgerIngredient);

export const BurgerIngredient = ({ type }: BurgerIngredientProps) => {
  let ingredient: JSX.Element | null;

  switch (type) {
    case "bacon":
      ingredient = <div className={styles.Bacon}/>;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}/>
          <div className={styles.Seeds2}/>
        </div>
      );
      break;
    case "bread-bottom":
      ingredient = <div className={styles.BreadBottom}/>;
      break;
    case "cheese":
      ingredient = <div className={styles.Cheese}/>;
      break;
    case "meat":
      ingredient = <div className={styles.Meat}/>;
      break;
    case "salad":
      ingredient = <div className={styles.Salad}/>;
      break;
    default:
      ingredient = null;
      break;
  }

  return ingredient;
};
