import React from "react";
import { Person as PersonType } from "../data/people";

type PersonProps = {
  personData: PersonType;
};

const PersonComponent: React.FC<PersonProps> = ({ personData }) => {
  return <article className="person">{personData.name}</article>;
};

export default PersonComponent;
