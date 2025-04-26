import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Statistics = (props) => <p>{props.text} {props.value}{props.text2}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = value => {
    setGood(value)
  }

  const addNeutral = value => {
    setNeutral(value)
  }

  const addBad = value => {
    setBad(value)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => addGood(good + 1)} text="good" />
      <Button onClick={() => addNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => addBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={good + neutral + bad} />
      <Statistics text="average" value={(good - bad) / (good + neutral + bad)} />
      <Statistics text="positive" value={good / (good + neutral + bad) * 100} text2="%" />
    </div>
  )
}

export default App