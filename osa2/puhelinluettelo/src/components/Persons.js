import React from "react";

const Person = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  );
};

export const Persons = ({ persons, filter }) => {
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

  return <div>{rows()}</div>;
};
