import React from "react";

export const Course = ({ courses }) => {
  const sections = () =>
    courses.map(course => (
      <div key={course.name}>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    ));
  return <div>{sections()}</div>;
};

const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => {
  const rows = () =>
    parts.map(part => (
      <Part key={part.id} part={part.name} exercise={part.exercises} />
    ));
  return <>{rows()}</>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};
const Total = ({ parts }) => {
  let total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <strong>Number of exercises {total}</strong>;
};
