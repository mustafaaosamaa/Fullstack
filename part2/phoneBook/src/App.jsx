import { useState } from 'react'

const Filter = ({ searchMatches, handleSearchFilterChange, results }) => {
  return (
    <div>
      <div>Filter shown with: <input value={searchMatches} onChange={handleSearchFilterChange} /></div>
      <div>{results}</div>
    </div>
  )
}

const PersonForm = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <div> Name: <input value={newName} onChange={handleNameChange} /> </div>
      <div> Number: <input value={newNumber} onChange={handleNumberChange} /> </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({persons}) => {
  return (
    <div>
      {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchMatches, setSearchMatches] = useState('')
  const [results, setResults] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (newName === '') {
      alert('You need to insert the name')
    }
    else if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    }
    else {
      const newObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const displayMatches = (name) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === name) {
        setResults(`${persons[i].name} ${persons[i].number}`)
        setSearchMatches('')
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchFilterChange = (event) => {
    setSearchMatches(event.target.value)
    displayMatches(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchMatches={searchMatches}
        handleSearchFilterChange={handleSearchFilterChange}
        results={results}
      />
      <h2>Add a New Contact</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
      />
    </div>
  )
}

export default App