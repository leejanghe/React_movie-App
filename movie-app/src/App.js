import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Detail from './routes/Detail'
import Home from './routes/Home'
import './App.module.css'
import Test1 from './test/Test1'
import Useinput from './test/Useinput'
import UseTabs from './test/UseTabs'
import UseEffect from './test/UseEffect'
import UseTitle from './test/UseTitle'
import UseRef from './test/UseRef'
import UseClick from './test/UseClick'
import UseConfirm from './test/UseConfirm'
import UsePreventLeave from './test/UsePreventLeave'
import UseBeforeLeave from './test/UseBeforeLeave'
import UseFadeIn from './test/UseFadeIn'

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
      <Routes>
        <Route path="/test3" element={<UseEffect/>}/>
      </Routes>
      <Routes>
        <Route path="/test4" element={<UseTitle/>}/>
      </Routes>
      <Routes>
        <Route path="/test5" element={<UseRef/>}/>
      </Routes>
      <Routes>
        <Route path="/test6" element={<UseClick/>}/>
      </Routes>
      <Routes>
        <Route path="/test7" element={<UseConfirm/>}/>
      </Routes>
      <Routes>
        <Route path="/test8" element={<UsePreventLeave/>}/>
      </Routes>
      <Routes>
        <Route path="/test9" element={<UseBeforeLeave/>}/>
      </Routes>
      <Routes>
        <Route path="/test10" element={<UseFadeIn/>}/>
      </Routes>
    </Router>
  )
}

export default App
