import { useEffect, useState } from "react";
import { Person } from "../../schemas/PersonSchema";
import { getNames } from "../../services/FirebaseService";
import "./App.scss";


const App = (): JSX.Element => {
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    console.log('Testing...');
    getNames().then(namesData => {
      setPeople(namesData);
    });
  }, []);
  
  return (
  <>
    <h1 className="header">Hello World</h1>
    <ul>
      {(people.map((person, ind) => <li key={ind}>{person.getName()}</li>))}
    </ul>
  </>
  );
}

export default App;