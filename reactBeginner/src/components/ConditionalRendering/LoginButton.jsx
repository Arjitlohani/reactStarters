/* eslint-disable no-unused-vars */
import React from 'react'

const LoginButton = ({setIsUserIsLoggedIn, userIsLoggedIn}) => {
    const handleLogin = () => {
        localStorage.setItem("loggedin", true)
        setIsUserIsLoggedIn(true)
    }
  return (
    <div>
        <h1>Please login first</h1>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginButton