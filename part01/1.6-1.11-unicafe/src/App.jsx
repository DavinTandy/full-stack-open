import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Buttons = (props) => {
  return (
    <div>
      <Button onClick={props.onClickGood} text="good" />
      <Button onClick={props.onClickNeutral} text="neutral" />
      <Button onClick={props.onClickBad} text="bad" />
    </div>
  )
}

const StatisticLine = (props) => <p>{props.text} {props.value}{props.text2}</p>

const Statistics = (props) => {
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100} text2="%" />
    </div>
  )
}

const History = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <Statistics good={props.good} neutral={props.neutral} bad={props.bad} />
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
      <Buttons onClickGood={() => addGood(good + 1)} onClickNeutral={() => addNeutral(neutral + 1)} onClickBad={() => addBad(bad + 1)}/>
      <h1>statistics</h1>
      <History all={good + neutral + bad} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App