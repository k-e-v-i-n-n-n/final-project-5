import React from 'react'
import {Routes, Route, useNavigate, useParams} from 'react-router-dom'
import Header1 from "./components/Header1"
import Header2 from "./components/Header2"
import Translate from './Pages/Translate'
import Expressions from './Pages/Expressions'
import Lists from './Pages/Lists'
import Words from './Pages/Words'


function App() {
  return (
    <>
        <Header1/>
        <Header2/>
        <Routes>
          <Route path="/" element={<Translate/>}/>
          <Route path="/expressions" element={<Expressions/>}/>
          <Route path="/words" element={<Words/>}/>
          <Route path="/lists" element={<Lists/>}/>
        </Routes>

    </> 
  )
}

export default App
