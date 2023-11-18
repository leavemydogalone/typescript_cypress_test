export type NewPersonType = {
  name?: string;
  age?: number;
  height?: number;
  portrait: string;
};

export interface Person {
  name: string;
  age: number;
  height: number;
  portrait: string;
}

export enum ACTIONS {
  ADD_Person,
}
