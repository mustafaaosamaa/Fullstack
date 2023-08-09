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

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        {props.part} {props.excercise}
      </p>
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
  // const-definitions

  return (
    <div>
      <Header course={'Half Stack application development'} />
      <Content part={'Fundamentals of React'} excercise={10}/>
      <Content part={'Using props to pass data'} excercise={7}/>
      <Content part={'State of a component'} excercise={14}/>
      <Total totalEx={31}/>
    </div>
  )
}

export default App