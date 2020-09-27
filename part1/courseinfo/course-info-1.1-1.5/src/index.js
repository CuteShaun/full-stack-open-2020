import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/Header';
import Content from './components/content/Content';
import Total from './components/total/Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const exerciseSum = course.parts.reduce((accum, currentValue) => {return accum + currentValue.exercises}, 0);


  console.log(exerciseSum, "exerciseSum");

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exerciseSum={exerciseSum} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))