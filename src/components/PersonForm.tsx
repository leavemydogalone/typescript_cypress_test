import React, { Dispatch } from "react";
import styles from "./Form.module.css";
import { ACTIONS, NewPersonType } from "../types/personTypes";
import { PayloadType } from "../helpers/formReducer";

type PersonFormPropType = {
  dispatch: Dispatch<PayloadType>;
  state: NewPersonType;
};

export default function PersonForm({ dispatch, state }: PersonFormPropType) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch({ type: ACTIONS.ADD, payload: { name: name } });
  //   setName("");
  // }
  console.log(typeof state.age);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const id: string = e.target.id;
    const updatedValue: string | number =
      e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    dispatch({ action: ACTIONS.UPDATE_TEXT, text: updatedValue, id: id });
  }
  return (
    <form className={styles.form}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        onChange={(e) => handleChange(e)}
        value={state.name}
        placeholder="ex) Jon"
      />
      <label htmlFor="age">Age</label>
      <input
        name="age"
        id="age"
        type="number"
        onChange={(e) => handleChange(e)}
        value={state.age || ""}
        placeholder="33"
      />
      <label htmlFor="height">Height</label>
      <input
        name="height"
        id="height"
        type="number"
        onChange={(e) => handleChange(e)}
        value={state.height || ""}
        placeholder="33"
      />
    </form>
  );
}
