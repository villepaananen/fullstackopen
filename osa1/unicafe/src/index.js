import React, { useState } from "react";
import ReactDOM from "react-dom";

/* TODO STEP 3--> */

const Feedback = props => {
  return <h1>give feedback</h1>;
};

const Total = ({ name, value }) => {
  return (
    <div>
      {name} {value}
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return (
    <div>
      <h1>Statistics</h1>
      <Total name="good" value={good} />
      <Total name="neutral" value={neutral} />
      <Total name="bad" value={bad} />
      <Total name="all" value={good + neutral + bad} />
      <Total
        name="average"
        value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
      />
      <Total name="positive" value={(good / (good + neutral + bad)) * 100} />
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
