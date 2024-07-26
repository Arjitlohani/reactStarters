import { useState } from 'react'

const EventHandling = () => {
    const [formValue, setValue] = useState("")
    const [lastName, setLastName] = useState("")

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleInput2Change = (e) => {
        setLastName(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello ${formValue} ${lastName}`)
        setValue('')
        setLastName('')
    }

  return (
    <div><h1>Event Handling</h1>
        <form onSubmit={handleSubmit}>
        <input
         value={formValue}
         onChange={handleInputChange}
         style={{width: "250px", padding: '12px'}}
        placeholder="First Name"
     />
        <input value={lastName} onChange={handleInput2Change} style={{width: "250px", padding: '12px', marginLeft: "12px"}} placeholder="Last Name" />
        <button type="submit">
            Click me
        </button>
        </form>
    </div>
  )
}

export default EventHandling