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
  </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const statistics = "statistics"

  return (
    <div>
      <Header title={title} />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header title={statistics} />
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App