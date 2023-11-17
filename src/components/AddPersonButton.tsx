import React from "react";
import styles from "./AddPersonButton.module.css";

type ButtonPropType = {
  onClick: () => void;
};
export default function AddPersonButton({ onClick }: ButtonPropType) {
  return (
    <button onClick={onClick} className={styles.button}>
      Add Person
    </button>
  );
}
