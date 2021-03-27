import styles from "./BuildControls.module.scss";
import { BuildControl, BuildControlProps } from "./BuildControl/BuildControl";


type ItemCount = number;
type FormatMoney = (value: number) => string;

export type BuildControlsProps = Readonly<{
  addHandler: BuildControlProps["addHandler"];
  removeHandler: BuildControlProps["removeHandler"];
  items: {
    [key: string]: ItemCount;
  };
  price: number;
}>

const formatMoney: FormatMoney = ((value) => {
  return `${(Math.round((value + Number.EPSILON) * 100) / 100).toFixed(2)}`;
});

export const BuildControls = ({ addHandler, items, price, removeHandler }: BuildControlsProps) => {
  return (
    <div className={styles.BuildControls}>
      <p>Total Price: {formatMoney(price)}</p>
      {Object.keys(items)
        .map((key) => <BuildControl
          key={key}
          label={key}
          addHandler={addHandler}
          removeHandler={removeHandler}/>)}
    </div>
  );
};