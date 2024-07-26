import { useState } from "react"

function State() {
  const [name, setName] = useState("MERN");
  const [isJavascript, setIsJavaScript] = useState(false);
  const [myAge, setMyAGE] = useState(20);

  const [myArray, setArray] = useState([]);

  const [myObject, setMYObject] = useState({
    "name":"Mern",
    "age": 40,
  })

  const handleClick = () => {
    setName("javascript")
    setIsJavaScript(true)
    setMyAGE(40)
    setArray([1,2,3,4,5])
    setMYObject({
      ...myObject, name: "JS"
    })
  }

  console.log(myObject.name);
  console.log(myArray);

  return (
    <div>
      <p>{name}</p>
      <p>{myAge}</p>
      <p>{isJavascript.toString()}</p>
      <button onClick={handleClick}>Change My Name</button>
    </div>
  )
}

export default State