import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import { Notification } from "./components/Notification";
import peopleService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  const [notification, setNotification] = useState({
    message: null,
    type: null
  });

  useEffect(() => {
    peopleService.getAll().then(initialPeople => {
      setPersons(initialPeople);
    });
  }, []);

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleFilterChange = event => setNewFilter(event.target.value);

  const handleNotification = ({ message, type }) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: null, type: null });
    }, 3000);
  };

  const handlePersonAdd = event => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    const matches = persons.filter(person => person.name === newPerson.name);
    if (matches.length === 0) {
      peopleService
        .create(newPerson)
        .then(data => {
          setPersons(persons.concat(data));
          handleNotification({
            message: `Added ${newPerson.name}.`,
            type: "notification"
          });
          setNewName("");
          setNewNumber("");
        })
        .catch(error => {
          handleNotification({
            message: `Person ${newPerson.name} couldn't be added.`,
            type: "error"
          });
        });
    } else {
      const result = window.confirm(
        `${newPerson.name} is already added to the phonebook, replace the old number with a new one?`
      );

      if (result) {
        peopleService
          .update(matches[0].id, newPerson)
          .then(returnedPerson => {
            setPersons(
              persons.map(person =>
                person.id !== matches[0].id ? person : returnedPerson
              )
            );
            handleNotification({
              message: `Updated ${newPerson.name} with number ${newPerson.number}.`,
              type: "notification"
            });
            setNewName("");
            setNewNumber("");
          })
          .catch(error => {
            handleNotification({
              message: `Person ${newPerson.name} was already removed from the server.`,
              type: "error"
            });
            setPersons(persons.filter(p => p.name !== newPerson.name));
          });
      }
    }
  };

  const handlePersonDelete = event => {
    event.preventDefault();
    const person = persons.find(p => p.name === event.target.name);
    const result = window.confirm(
      `Are you sure you want to delete ${person.name}?`
    );
    if (result) {
      peopleService
        .remove(person.id)
        .then(response => {
          setPersons(persons.filter(p => p.name !== person.name));
          handleNotification({
            message: `Removed ${person.name}.`,
            type: "notification"
          });
        })
        .catch(error => {
          handleNotification({
            message: `Person ${person.name} was already removed from the server.`,
            type: "error"
          });
          setPersons(persons.filter(p => p.name !== person.name));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
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
      <Persons
        persons={persons}
        filter={filter}
        handlePersonDelete={handlePersonDelete}
      />
    </div>
  );
};

export default App;
