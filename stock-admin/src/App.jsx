import './App.css'
import './main.scss'
import Navigation from './Components/Navigation'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <div className="app-main">
      <div className="app-main-left">
        <Navigation />
      </div>
      <div className="app-main-right">
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
