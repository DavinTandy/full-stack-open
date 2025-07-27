import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newObject = {
      name: newName,
      id: String(persons.length + 1)
    }

    setPersons(persons.concat(newObject))
    setNewName('')
  }

  const handleContactChange = (event) => {
    setNewName(event.target.value)
  }

  const Contact = ({ contact }) => {
    return <li>{contact.name}</li>
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Contact key={person.id} contact={person} />
        )}
      </ul>
    </div>
  )
}

export default App