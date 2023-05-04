import {React, useEffect, useState, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import { AppContext } from './Context'
import axios from "axios"
import Header1 from "./components/Header1"
import Header2 from "./components/Header2"
import Stars from './landing_pages/Stars'
import Translate from './landing_pages/Translate'
import Expressions from './landing_pages/Expressions'
import Words from './landing_pages/Words'
import Login from './landing_pages/Login'

function App() {

  const {translationObject, setTranslationObject, sourceLang, targetLang, user, setUser, setIsLogged} = useContext(AppContext)
  const sourceText = translationObject[sourceLang]
  const [showListModal, setShowListModal] = useState()
  const [catSelected, setCatSelected] = useState(false)
  const [wordState, setWordState] = useState()
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    const data = {sourceText, sourceLang, targetLang}
    const response = await axios.get(`${process.env.REACT_APP_EXPRESS_SERVER}/translate`, {params : data})
    setLoading(false);
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

  // console.log("user", user)


  return (
    <>
        <Header1/>
        <Header2 setCatSelected={setCatSelected} />
        <Routes>
          <Route path="/" element={<Translate loading={loading} setLoading={setLoading} translateText={translateText}/>}/>
          <Route path="/expressions" element={<Expressions showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/words" element={<Words wordState={wordState} setWordState={setWordState} showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/stars" element={<Stars wordState={wordState} setWordState={setWordState} catSelected={catSelected} setCatSelected={setCatSelected} showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/log" element={<Login/>}/>
        </Routes>
    </> 
  )
}

export default App
