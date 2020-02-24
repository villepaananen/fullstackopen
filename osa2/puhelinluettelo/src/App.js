import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import peopleService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  useEffect(() => {
    peopleService.getAll().then(initialPeople => {
      setPersons(initialPeople);
    });
  }, []);

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleFilterChange = event => setNewFilter(event.target.value);

  const handlePersonAdd = event => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    const matches = persons.filter(person => person.name === newPerson.name);
    if (matches.length === 0) {
      peopleService.create(newPerson).then(data => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewNumber("");
      });
    } else {
      window.alert(`${newPerson.name} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        handlePersonAdd={handlePersonAdd}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
