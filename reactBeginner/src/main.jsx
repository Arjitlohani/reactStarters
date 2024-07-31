
import ReactDOM from 'react-dom/client'

import './index.css'
// import State from './State'
import App from './App.jsx'
import AuthProvider from './components/Context/AuthProvider.jsx'
import ThemeProvider from './components/Context/ThemeProvider.jsx'
// import EventHandling from './components/EventHandling'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>


 <AuthProvider>
    <App />
 </AuthProvider>
 </ThemeProvider>
 

)
