import {React, useEffect, useState, useContext} from 'react'
import {Routes, Route, useNavigate, useParams} from 'react-router-dom'
import { AppContext } from './Context'
import axios from "axios"
import Header1 from "./components/Header1"
import Header2 from "./components/Header2"
import Translate from './pages/Translate'
import Expressions from './pages/Expressions'
import Lists from './pages/Lists'
import Words from './pages/Words'
import Login from './pages/Login'

function App() {

  const {translationObject, setTranslationObject, sourceLang, targetLang, user, setUser} = useContext(AppContext)
  const sourceText = translationObject[sourceLang]

  const translateText = async () => {
    const data = {sourceText, sourceLang, targetLang}
    const response = await axios.get('http://localhost:8000/translate', {params : data})
    setTranslationObject({...translationObject, [targetLang]: response.data})
  }

  useEffect(() =>{
    fetch("/me")
    .then((r) => r.json()).then((r) => setUser(r) )
  }, [])

  console.log("main user", user)

  return (
    <>
        <Header1/>
        <Header2/>
        <Routes>
          <Route path="/" element={<Translate translateText={translateText}/>}/>
          <Route path="/expressions" element={<Expressions/>}/>
          <Route path="/words" element={<Words/>}/>
          <Route path="/lists" element={<Lists/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

    </> 
  )
}

export default App
