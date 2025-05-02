import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

  const total = good + neutral + bad;
  const promedio = total > 0 ? (good * 1 + bad * -1) / total : 0;
  const porcentajePositivo = total > 0 ? (good / total) * 100 : 0;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>

      <div>
        good {good}
        <br />
        neutral {neutral}
        <br />
        bad {bad}
        <br />
        all {total}
        <br />
        average {promedio}
        <br />
        positive {porcentajePositivo} %
        <br />
      </div>
    </div>
  );
};

export default App;
