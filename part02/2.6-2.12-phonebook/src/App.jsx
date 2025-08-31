import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ filterInput, handleFilterChange }) => {
  return <div>filter shown with <input value={filterInput} onChange={handleFilterChange} /></div>
}

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addContact}) => {
  return (
  <form onSubmit={addContact}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Contact = ({ contact }) => {
  return <li>{contact.name} {contact.number}</li>
}

const Persons = ({ filteredContact }) => {
  return <ul>{filteredContact.map(person => <Contact key={person.id} contact={person} />)}</ul>
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addContact = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredContact = persons.filter((person) =>
    person.name.includes(filterInput)
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterInput(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterInput={filterInput} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addContact={addContact} />
      <h3>Numbers</h3>
      <Persons filteredContact={filteredContact} />
    </div>
  )
}

export default App