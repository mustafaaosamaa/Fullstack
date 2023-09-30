import React, { useState } from 'react'

const StatisticLine = ({label , value}) => {
  return(
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (!all) {
    return (
      <div>no feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine label ="good" value={good}/>
        <StatisticLine label ="neutral" value={neutral}/>
        <StatisticLine label ="bad" value={bad}/>
        <StatisticLine label ="all" value={all}/>
        <StatisticLine label ="average" value={(good * 100) / all + '%'}/>
        <StatisticLine label ="positive" value={(good - bad) / all + '%'}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App