import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { peopleArray, morePeopleArray } from "./data/people";
import { NewPersonType, Person } from "./types/personTypes";
import PersonComponent from "./components/Person";
import AddPersonButton from "./components/AddPersonButton";
import PersonForm from "./components/PersonForm";
import { reducer } from "./helpers/formReducer";

function App() {
  const [people, setPeople] = useState<Person[] | []>([]);
  const [morePeople, setMorePeople] = useState<Person[] | []>([]);
  const [newPersonData, setNewPersonData] = useState<NewPersonType | null>(
    null
  );
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    //mock API call
    if (peopleArray !== null) {
      setPeople(peopleArray);
    }
    //mock API call
    if (morePeopleArray !== null) {
      setMorePeople(morePeopleArray);
    }
  }, [morePeopleArray]);

  function handleAddNewPerson(): void {
    if (newPersonData !== null) {
    } else {
      if (morePeople.length > 0) {
        setPeople((prev) => [...prev, morePeople[0]]);
        setMorePeople((prev) => prev.slice(1));
      }
    }
  }

  return (
    <main className="App">
      <section className="peopleContainer">
        {people.map((person) => (
          <PersonComponent personData={person} />
        ))}
      </section>
      <aside className="formContainer">
        <PersonForm />
      </aside>
      <div className="buttonContainer">
        <AddPersonButton
          onClick={handleAddNewPerson}
          disabled={morePeople.length === 0 && newPersonData === null}
        />
      </div>
    </main>
  );
}

export default App;
