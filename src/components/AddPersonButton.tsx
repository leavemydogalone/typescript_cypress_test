import React from "react";
import styles from "./AddPersonButton.module.css";

type ButtonPropType = {
  onClick: () => void;
  disabled: boolean;
};
export default function AddPersonButton({ onClick, disabled }: ButtonPropType) {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      Add Person
    </button>
  );
}
