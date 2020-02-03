import React, { useState } from "react";
import ReactDOM from "react-dom";

/* TODO STEP 3--> */

const Feedback = props => {
  return <h1>give feedback</h1>;
};

const Statistic = ({ name, value }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avg = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return <h1>No feedback given</h1>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <h1>Statistics</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          <Statistic name="good" value={good} />
          <Statistic name="neutral" value={neutral} />
          <Statistic name="bad" value={bad} />
          <Statistic name="all" value={total} />
          <Statistic name="average" value={avg} />
          <Statistic name="positive" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const Button = props => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback />
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
