export type NewPersonType = {
  // [key: string]: string | number;
  name: string;
  age: number;
  height: number;
  portrait: string;
};

export interface Person {
  name: string;
  age: number;
  height: number;
  portrait: string;
}

export enum ACTIONS {
  ADD_PERSON,
  UPDATE_TEXT,
  SUBMIT_FORM,
}
