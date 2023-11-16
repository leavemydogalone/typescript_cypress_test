import { useEffect, useState } from "react";
import "./App.css";
import peopleArray, { Person } from "./data/people";
import PersonComponent from "./components/Person";

function App() {
  const [people, setPeople] = useState<Person[] | []>([]);
  useEffect(() => {
    //mock API call
    if (peopleArray !== null) {
      setPeople(peopleArray);
    }
  }, []);

  return (
    <main className="App">
      <section className="peopleContainer">
        {people.map((person) => (
          <PersonComponent personData={person} />
        ))}
      </section>
    </main>
  );
}

export default App;
