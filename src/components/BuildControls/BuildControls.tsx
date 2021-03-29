import styles from "./BuildControls.module.scss";
import { BuildControl, BuildControlClickHandler } from "./BuildControl/BuildControl";
import { MouseEventHandler } from "react";


type ItemCount = number;
type FormatMoney = (value: number) => string;
export type PurchaseHandler = MouseEventHandler<HTMLButtonElement>;
export type BuildControlItems = {
  [key: string]: ItemCount;
};

export type BuildControlsProps = Readonly<{
  addHandler: BuildControlClickHandler;
  items: BuildControlItems;
  removeHandler: BuildControlClickHandler;
  price: number;
  purchaseHandler: PurchaseHandler;
}>

const formatMoney: FormatMoney = ((value) => {
  return `${(Math.round((value + Number.EPSILON) * 100) / 100).toFixed(2)}`;
});

export const BuildControls = ({ addHandler, items, purchaseHandler, price, removeHandler }: BuildControlsProps) => {
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
      <button
        className={styles.OrderButton}
        disabled={!purchasable}
        onClick={purchaseHandler}>ORDER
      </button>
    </div>
  );
};