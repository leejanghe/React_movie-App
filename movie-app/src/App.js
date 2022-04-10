import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Detail from './routes/Detail'
import Home from './routes/Home'
import './App.module.css'
// import Test1 from './test/UseStateBase'
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
import UseNetwork from './test/UseNetwork'
import UseScroll from './test/UseScroll'
import UseFullscreen from './test/UseFullscreen'
import UseNotification from './test/UseNotification'
import UseStateBase from './test/UseStateBase'

import AxiosApp from './test/AxiosApp'

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
        <Route path="/test" element={<UseStateBase/>}/>
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
      <Routes>
        <Route path="/test11" element={<UseNetwork/>}/>
      </Routes>
      <Routes>
        <Route path="/test12" element={<UseScroll/>}/>
      </Routes>
      <Routes>
        <Route path="/test13" element={<UseFullscreen/>}/>
      </Routes>
      <Routes>
        <Route path="/test14" element={<UseNotification/>}/>
      </Routes>
      
      {/* <Routes>
        <Route path="/test16" element={<AxiosApp/>}/>
      </Routes> */}
    </Router>
  )
}

export default App
