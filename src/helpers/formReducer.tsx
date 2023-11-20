import { ACTIONS, NewPersonType } from "../types/personTypes";

export type PayloadType = {
  action: ACTIONS;
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
      // Only allow string for 'name' and 'portrait'
      if (
        typeof payload.text === "string" ||
        typeof payload.text === "number"
      ) {
        return { ...state, [payload.id]: payload.text };
      }
      return state;
    default:
      return state;
  }
}
