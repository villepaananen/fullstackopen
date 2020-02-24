import React from "react";

const Person = ({ name, number, handlePersonDelete }) => {
  return (
    <div>
      {name} {number}
      <button name={name} onClick={handlePersonDelete}>
        delete
      </button>
    </div>
  );
};

export const Persons = ({ persons, filter, handlePersonDelete }) => {
  const rows = () => {
    if (filter === "") {
      return persons.map(person => (
        <Person
          name={person.name}
          key={person.name}
          number={person.number}
          handlePersonDelete={handlePersonDelete}
        />
      ));
    } else {
      const filtered = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered.map(person => (
        <Person
          name={person.name}
          key={person.name}
          number={person.number}
          handlePersonDelete={handlePersonDelete}
        />
      ));
    }
  };

  return <div>{rows()}</div>;
};
