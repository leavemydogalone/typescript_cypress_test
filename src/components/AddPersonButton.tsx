import React from "react";
import styles from "./AddPersonButton.module.css";

type ButtonPropType = {
  onClick: () => void;
  whoToAdd: "newPerson" | "randomPerson" | null;
};
export default function AddPersonButton({ onClick, whoToAdd }: ButtonPropType) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      disabled={whoToAdd === null}
    >
      Add {whoToAdd === "randomPerson" && "Random"} Person{" "}
      {whoToAdd === "newPerson" && "From Form"}
    </button>
  );
}
