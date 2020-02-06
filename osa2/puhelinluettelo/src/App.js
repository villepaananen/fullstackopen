import React, { useState } from "react";

const Name = ({ name }) => {
  return <div>{name}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const addName = event => {
    event.preventDefault();
    const nameObject = {
      key: newName
    };

    setPersons(persons.concat(nameObject));
    setNewName("");
    console.log(persons);
  };

  const rows = () =>
    persons.map(name => <Name key={name.content} id={name.id} />);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <input value={newName} onChange={handleNameChange}></input>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
