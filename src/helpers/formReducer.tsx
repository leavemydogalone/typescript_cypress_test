import { ACTIONS, NewPersonType, Person } from "../types/personTypes";
import { Dispatch, SetStateAction } from "react";
import getDefaultState from "./getDefaultPersonState";

export type PayloadType = {
  action: ACTIONS;
  setPeople?: Dispatch<SetStateAction<Person[]>>;
  text?: string | number;
  id?: string;
};

// fix these anies
export function reducer(
  state: NewPersonType,
  payload: PayloadType
): NewPersonType {
  switch (payload.action) {
    case ACTIONS.UPDATE_TEXT:
      console.log(typeof payload.text);
      if (typeof payload.id !== "string") return state;
      // Only allow string for 'name'
      if (
        typeof payload.text === "string" ||
        typeof payload.text === "number"
      ) {
        return { ...state, [payload.id]: payload.text };
      }
      return state;
    case ACTIONS.SUBMIT_FORM:
      if (payload.setPeople) {
        const newPerson: NewPersonType = {
          name: state.name,
          age: state.age,
          height: state.height,
          portrait: state.portrait,
        };
        payload.setPeople((prev) => [...prev, newPerson]);
        state = getDefaultState();
      }
      return state;
    default:
      return state;
  }
}
