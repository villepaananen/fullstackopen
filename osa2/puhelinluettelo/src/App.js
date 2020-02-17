import React, { useState } from "react";

const Person = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
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
    persons.map(person => (
      <Person name={person.name} key={person.name} number={person.number} />
    ));

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
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
