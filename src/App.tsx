import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RandomUserList from './features/randomUser/components/randomUser'
import './index.css'

const App = () => (
  <div className="px-5 container mx-auto">
    <Router>
      <Routes>
        <Route path="/" element={<RandomUserList />} />
      </Routes>
    </Router>
  </div>
)

export default App
