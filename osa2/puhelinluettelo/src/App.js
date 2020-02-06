import React, { useState } from "react";

const Button = () => {
  return <button type="submit">add</button>;
};

const Number = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <Button />
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  );
};

export default App;
