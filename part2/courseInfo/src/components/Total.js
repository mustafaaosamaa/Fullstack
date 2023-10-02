const Total = ({parts}) => {
    console.log(parts)
    return (
        <div>
            <p><strong>total of {parts.map(part => part.exercises).reduce((s,e)=>s+e,0)} exercises</strong></p>
        </div>
    )
}

export default Total