export type NewPersonType = {
  name?: string;
  age?: number;
  height?: number;
};

export interface Person {
  name: string;
  age: number;
  height: number;
  portrait: string;
}