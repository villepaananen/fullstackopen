import React, { useState } from "react";

const Person = ({ name }) => {
  return <div> {name} </div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    const newPerson = {
      name: newName
    };

    const matches = persons.filter(person => person.name === newPerson.name);
    if (matches.length === 0) {
      setPersons(persons.concat(newPerson));
      setNewName("");
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }
  };

  const rows = () =>
    persons.map(person => <Person name={person.name} key={person.name} />);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{rows()}</div>
    </div>
  );
};

export default App;
