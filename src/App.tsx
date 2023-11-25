import { useEffect, useReducer, useState, Dispatch } from "react";
import "./App.css";
import { peopleArray, morePeopleArray } from "./data/people";
import { ACTIONS, NewPersonType, Person } from "./types/personTypes";
import PersonComponent from "./components/Person";
import AddPersonButton from "./components/AddPersonButton";
import PersonForm from "./components/PersonForm";
import { reducer } from "./helpers/formReducer";
import getRandomEmoji from "./helpers/getRandomEmoji";

function App() {
  const [people, setPeople] = useState<Person[] | []>([]);
  const [morePeople, setMorePeople] = useState<Person[] | []>([]);
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    age: 0,
    height: 0,
    portrait: getRandomEmoji(),
  });

  const completePerson: boolean = !!(state.age && state.name && state.height);

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
    if (completePerson) {
      dispatch({ action: ACTIONS.SUBMIT_FORM, setPeople: setPeople });
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
        <PersonForm dispatch={dispatch} state={state} />
      </aside>
      <div className="buttonContainer">
        <AddPersonButton
          onClick={handleAddNewPerson}
          disabled={!completePerson || morePeople.length === 0}
        />
      </div>
    </main>
  );
}

export default App;
