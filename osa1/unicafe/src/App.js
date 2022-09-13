import { useState } from 'react'

const Header = (props) => <h1>{props.title}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Category = (props) => {
  return (
  <>
  {props.text} {props.value}
  </>
  )
}

const Display = (props) => {
  return (
  <>
  <p><Category text='good' value={props.good} /></p>
  <p><Category text='neutral' value={props.neutral} /></p>
  <p><Category text='bad' value={props.bad} /></p>
  <p><Category text='all' value={props.sum} /></p>
  <p><Category text='avegage' value={props.average} /></p>
  <p><Category text='positive' value={props.positive} /></p>
  </>
  )
}

const average = (good, neutral, bad) => {
  const weight = good * 1 + bad * -1
  const avg = weight / (good + neutral + bad)
  return avg
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const statistics = "statistics"
  const sum = good + neutral + bad
  const avg = average(good, neutral, bad)
  const positive = good / (good + neutral + bad) + '%'

  return (
    <div>
      <Header title={title} />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header title={statistics} />
      <Display good={good} neutral={neutral} bad={bad} sum={sum} average={avg} positive={positive} />
    </div>
  )
}

export default App