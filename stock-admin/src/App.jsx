import './App.css'
import './main.scss'
import Navigation from './Components/Navigation'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import ClientTable from './Components/Dashboard/clients_table'
import ViewClient from './Components/Dashboard/view_client'

function App() {

  return (
    <div className="app-main">
      <div className="app-main-left">
        <Navigation />
      </div>
      <div className="app-main-right">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/clients' element={<ClientTable />} />
          <Route path='/client/:id' element={<ViewClient />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
