import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Statistics = (props) => <p>{props.text} {props.value}{props.text2}</p>

const History = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <Statistics text="good" value={props.good} />
      <Statistics text="neutral" value={props.neutral} />
      <Statistics text="bad" value={props.bad} />
      <Statistics text="all" value={props.good + props.neutral + props.bad} />
      <Statistics text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <Statistics text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100} text2="%" />
    </div>
  )
}

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
      <History all={good + neutral + bad} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App