import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Detail from './routes/Detail'
import Home from './routes/Home'
import './App.module.css'
import Test1 from './test/Test1'
import Useinput from './test/Useinput'
import UseTabs from './test/UseTabs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="movie/:id" element={<Detail/>}/>
      </Routes>
      <Routes>
        <Route path="/test" element={<Test1/>}/>
      </Routes>
      <Routes>
        <Route path="/test1" element={<Useinput/>}/>
      </Routes>
      <Routes>
        <Route path="/test2" element={<UseTabs/>}/>
      </Routes>
    </Router>
  )
}

export default App
