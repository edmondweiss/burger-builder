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
  const purchasable: boolean = Object.keys(items).reduce(((previousValue, key) => previousValue + items[key]), 0) !== 0;
  return (
    <div className={styles.BuildControls}>
      <p>Total Price: <strong>{formatMoney(price)}</strong></p>
      {Object.keys(items)
        .map((key) => <BuildControl
          key={key}
          label={key}
          addHandler={addHandler}
          removeHandler={removeHandler}
          disableLess={items[key] === 0}/>)}
          <button className={styles.OrderButton} disabled={!purchasable}>ORDER</button>
    </div>
  );
};