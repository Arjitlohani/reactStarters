/* eslint-disable no-unused-vars */

// import FragmentComponent from './components/Fragment/FragmentComponent'
// import useDataFetch from './components/Hooks/useDataFetch'
// import { useState } from 'react'
// import Dashboard from './components/ConditionalRendering/Dashboard'
// import LoginButton from './components/ConditionalRendering/LoginButton'
// import ListKeys from './components/ListKeys'
// function App() { // This is main parent
  // const isLoggedIn = localStorage.getItem("loggedin")
  // const [userIsLoggedIn, setIsUserIsLoggedIn] = useState(isLoggedIn || false)

// import {AuthContext} from './components/Context/AuthProvider'
import EventHandling from './components/EventHandling'

//   const [data] = useDataFetch("https://jsonplaceholder.typicode.com/posts")
//   console.log(data)
//   return (
//     <div>
//   <FragmentComponent/>
  
//   <ul>
//   {data?.length > 0 && data.map((item) => (
//   <li key={item?.id}>
//     {item?.title}
//   </li>
// ))}
// </ul>
  

// </div>




//     )
// }

// export default App

function App() {
  return (
    <div>
      <EventHandling/>
    </div>
  )
}
export default App