import { useEffect, useReducer, useState, Dispatch } from "react";
import "./App.css";
import { peopleArray, morePeopleArray } from "./data/people";
import { ACTIONS, NewPersonType, Person } from "./types/personTypes";
import PersonComponent from "./components/Person";
import AddPersonButton from "./components/AddPersonButton";
import PersonForm from "./components/PersonForm";
import { reducer } from "./helpers/formReducer";
import getDefaultState from "./helpers/getDefaultPersonState";

function App() {
  const [people, setPeople] = useState<Person[] | []>([]);
  const [morePeople, setMorePeople] = useState<Person[] | []>([]);
  const [state, dispatch] = useReducer(reducer, getDefaultState());

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
  console.log(morePeopleArray);

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
          whoToAdd={
            completePerson
              ? "newPerson"
              : morePeople.length > 0
              ? "randomPerson"
              : null
          }
        />
      </div>
    </main>
  );
}

export default App;
