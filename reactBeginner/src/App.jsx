

function App() {
  const myInfo=import.meta.env.VITE_ENV

  return (
    <div className="mt-5">
      {myInfo}
      
    </div>
  )
}

export default App
