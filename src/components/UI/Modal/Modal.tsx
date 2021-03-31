import styles from "./Modal.module.scss";
import { MouseEventHandler, ReactNode } from "react";

export type ModalCloseHandler = MouseEventHandler<HTMLButtonElement | HTMLDivElement>;

type ModalProps = {
  children: ReactNode;
  show: boolean;
  close: ModalCloseHandler;
}

export const Modal = ({ children, close, show }: ModalProps) => {
  return (
    show ? <>
      <div className={styles.Modal}>
        <button
          className={styles.ModalClose}
          onClick={close}>X
        </button>
        {children}
      </div>
    </> : null
  );
};