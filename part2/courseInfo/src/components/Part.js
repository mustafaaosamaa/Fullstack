const Part = ({part}) => {
    console.log(part.name , part.exercises)
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default Part