import {React, useEffect, useState, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import { AppContext } from './Context'
import axios from "axios"
import Header1 from "./components/Header1"
import Header2 from "./components/Header2"
import Stars from './pages/Stars'
import Translate from './pages/Translate'
import Expressions from './pages/Expressions'
import Words from './pages/Words'
import Login from './pages/Login'

function App() {

  const {translationObject, setTranslationObject, sourceLang, targetLang, user, setUser, setIsLogged} = useContext(AppContext)
  const sourceText = translationObject[sourceLang]
  const [showListModal, setShowListModal] = useState()
  const [catSelected, setCatSelected] = useState(false)
  const [wordState, setWordState] = useState()

  const translateText = async () => {
    const data = {sourceText, sourceLang, targetLang}
    const response = await axios.get('http://localhost:8000/translate', {params : data})
    setTranslationObject({...translationObject, [targetLang]: response.data})
  }

  useEffect(() =>{
    fetch("/me")
    .then((r) =>{
      if(r.ok)
      {r.json().then((r) => {setUser(r); setIsLogged(true)})}
      else
      {console.log("/me says", r)}})
  }, [])

  useEffect(() =>{
    if(user){
      setIsLogged(true)}
      else{setIsLogged(false)}
  },[user])


  return (
    <>
        <Header1/>
        <Header2 setCatSelected={setCatSelected} />
        <Routes>
          <Route path="/" element={<Translate translateText={translateText}/>}/>
          <Route path="/expressions" element={<Expressions showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/words" element={<Words wordState={wordState} setWordState={setWordState} showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/stars" element={<Stars wordState={wordState} setWordState={setWordState} catSelected={catSelected} setCatSelected={setCatSelected} showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </> 
  )
}

export default App
