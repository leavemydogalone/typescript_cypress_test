import React from "react";
import { Person as PersonType } from "../types/personTypes";

type PersonProps = {
  personData: PersonType;
};

const PersonComponent: React.FC<PersonProps> = ({ personData }) => {
  const { name, age, height, portrait } = personData;
  return (
    <article className="person">
      <figure>{portrait}</figure>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>{height}</h4>
    </article>
  );
};

export default PersonComponent;
