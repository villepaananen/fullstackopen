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
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilter = event => {
    setNewFilter(event.target.value);
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

  const rows = () => {
    if (filter === "") {
      return persons.map(person => (
        <Person name={person.name} key={person.name} number={person.number} />
      ));
    } else {
      const filtered = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered.map(person => (
        <Person name={person.name} key={person.name} number={person.number} />
      ));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={filter} onChange={handleFilter}></input>
      </div>
      <h2>Add a new</h2>
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
