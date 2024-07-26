import  { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [name, setName] = useState("react")
    const [updatedNumber, setUpdatedNumber] = useState(0)
    useEffect(() => {
        setUpdatedNumber(updatedNumber + 1)
        return () => setUpdatedNumber(0) // component will unmount
    }, [name])
    const handleClick = () => {
        setName(name === "react" ? "REACT" : "react")
    }
  return (
    <div><h1>Component Life Cycle in React</h1>
    <button onClick={handleClick}>UPDATE ME</button>
    <p>{name}</p>
    <p>{updatedNumber}</p>
    </div>
  )
}

export default LifeCycle