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
  const parts = [
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

  return (
    <div>
      <Header course={course}/>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
      <Total totalEx='31'/>
    </div>
  )
}

export default App