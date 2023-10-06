import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Dashboard/Customers'
import Properties from './pages/Dashboard/Properties'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </Router>
  )
}

export default App
