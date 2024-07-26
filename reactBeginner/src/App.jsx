import Heading from './components/Heading.jsx'
import HeadingKoChori from './components/headingKoChori.jsx'

function App() {
  const heading1Value = "This is a heading component"
  return (
    <div>
      <Heading laChoraSampati={heading1Value} />
      <HeadingKoChori chorikosampati={heading1Value} />
    </div>
  )
}

export default App