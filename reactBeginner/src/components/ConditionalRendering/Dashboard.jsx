/* eslint-disable no-unused-vars */
import React,{useState} from 'react'

const Dashboard = ({setIsUserIsLoggedIn, userIsLoggedIn}) => {
    const [showName, setShowName] = useState(false)
    const handleLogout = () => {
        localStorage.removeItem("loggedin")
        setIsUserIsLoggedIn(false)
    }
  return (
    <div>
        <h1>Welcome to dashboard</h1>
        {showName && <p>Hello World</p>}
        <button onClick={handleLogout}>Logout</button>
        <button onClick={() => setShowName(true)}>Show NAme</button>
    </div>
  )
}

export default Dashboard