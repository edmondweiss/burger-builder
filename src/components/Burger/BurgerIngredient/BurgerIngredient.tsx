import styles from "./BurgerIngredient.module.scss";


export type BurgerIngredientType =
  "bacon"
  | "bread-top"
  | "bread-bottom"
  | "cheese"
  | "meat"
  | "salad";

type BurgerIngredientProps = Readonly<{
  type: BurgerIngredientType;
}>;

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