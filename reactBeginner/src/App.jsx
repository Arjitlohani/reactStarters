

// import Heading from './components/Heading.jsx'

// // import HeadingKoChori from './components/HeadingKoChori.jsx'

// function App() {
//   const heading1Value = "This is a heading component"
//   return (
//     <div>
//       <Heading laChoraSampati={heading1Value} />
//       {/* <HeadingKoChori chorikosampati={heading1Value} /> */}
//     </div>
//   )
// }

// export default App


// import { useState } from 'react'
// import PropsChild1 from './components/PropsChild1'
// import PropsChild2 from './components/PropsChild2'

// function App() {
//   const [name, setName]= useState("MERN")
//   return (
//     <div>
//       <PropsChild1 name={name}/>
//       <PropsChild2 setName={setName}>This is a children </PropsChild2>
//     </div>
//   )
// }
// export default App

// import { useState } from 'react'
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';

// const App = () => {
//   const [isNavbarClosed, setIsNavbarClosed] = useState(false);
//   return (
//     <div>
//       <Navbar isNavbarClosed={isNavbarClosed}/>
//       <Sidebar setIsNavbarClosed={setIsNavbarClosed}/>
      
//     </div>
//   );
// }

// export default App;




import { useState } from 'react'
import Dashboard from './components/ConditionalRendering/Dashboard'
import LoginButton from './components/ConditionalRendering/LoginButton'
function App() { // This is main parent
  // const [isNavbarClosed, setIsNavbarClosed] = useState(false)
  const isLoggedIn = localStorage.getItem("loggedin")
  const [userIsLoggedIn, setIsUserIsLoggedIn] = useState(isLoggedIn || false)
  return (
    <div>
      {/* <Navbar isNavbarClosed={isNavbarClosed} />
      <Sidebar setIsNavbarClosed={setIsNavbarClosed} /> */}
      {userIsLoggedIn ?
      <Dashboard userIsLoggedIn={userIsLoggedIn} setIsUserIsLoggedIn={setIsUserIsLoggedIn} />
       :
      <LoginButton setIsUserIsLoggedIn={setIsUserIsLoggedIn} userIsLoggedIn={userIsLoggedIn} />
      }
     
    </div>
  )
}

export default App