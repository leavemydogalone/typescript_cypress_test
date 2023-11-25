import { NewPersonType } from "../types/personTypes";
import getRandomEmoji from "./getRandomEmoji";

const getDefaultState = (): NewPersonType => {
  return {
    name: "",
    age: 0,
    height: 0,
    portrait: getRandomEmoji(),
  };
};

export default getDefaultState;
