/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from './Context/AuthProvider';   
import { ThemeContext } from './Context/ThemeProvider'
const EventHandling = () => {
    const {userName, setUserName} = useContext(AuthContext);
    const {primaryColor, secondaryColor, successColor,dangerColor} = useContext(ThemeContext);
    const [formValue, setValue] = useState("")
    const [lastName, setLastName] = useState("")

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleInput2Change = (e) => {
        setLastName(e.target.value)
    } 

    const handleSubmit = (e) => {
        setUserName(formValue)
        e.preventDefault()
        alert(`Hello ${formValue} ${lastName}`)
        setValue('')
        setLastName('')
    }

    useEffect(()=>{
        userName?setValue(userName):setValue("")
    })
  return (
    <div><h1 style={{color: primaryColor}}>Event Handling</h1>
        <form onSubmit={handleSubmit}>
        <input
         value={formValue}
         onChange={handleInputChange}
         style={{width: "250px", padding: '12px'}}
        placeholder="First Name"
     />
        <input value={lastName} onChange={handleInput2Change} style={{width: "250px", padding: '12px', marginLeft: "12px"}} placeholder="Last Name" />
        <button type="submit" style={{backgroundColor: successColor}}>
            Click me
        </button>
        </form>
    </div>
  )
}

export default EventHandling