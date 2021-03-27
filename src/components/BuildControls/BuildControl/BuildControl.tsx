import styles from "./BuildControl.module.scss";

export type BuildControlClickHandler = (itemName: string) => void;

export type BuildControlProps = Readonly<{
  label: string;
  addHandler: BuildControlClickHandler;
  removeHandler: BuildControlClickHandler;
  disableLess: boolean;
}>

export const upperCaseFirstLetterOfWords = <T extends string>(value: T): string => value.replace(
  /^([a-z])|\s([a-z])/g,
  (letter) => letter.toUpperCase()
);

export const BuildControl = ({ disableLess, addHandler, label, removeHandler }: BuildControlProps) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{upperCaseFirstLetterOfWords(label)}</div>
      <button
        className={styles.Less}
        onClick={() => removeHandler(label)} disabled={disableLess}>Less
      </button>
      <button
        className={styles.More}
        onClick={() => addHandler(label)}>More
      </button>
    </div>
  );
};