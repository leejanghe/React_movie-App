import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Detail from './routes/Detail'
import Home from './routes/Home'
import './App.module.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="movie/:id" element={<Detail/>}/>
      </Routes>
    </Router>
  )
}

export default App
