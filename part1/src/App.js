const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        {props.part} {props.excercise}
      </p>
    </div>
  )
}

const Content = () => {
  return(
    <div>
      <Part part='Fundamentals of React' excercise={10}/>
      <Part part='Using props to pass data' excercise={7}/>
      <Part part='State of a component' excercise={14}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>
      Number of exercises {props.totalEx}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <Total totalEx='31'/>
    </div>
  )
}

export default App