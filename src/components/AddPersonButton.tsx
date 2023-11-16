import React from "react";

type ButtonPropType = {
  onClick: () => void;
};
export default function AddPersonButton({ onClick }: ButtonPropType) {
  return <button onClick={onClick}>AddPersonButton</button>;
}
