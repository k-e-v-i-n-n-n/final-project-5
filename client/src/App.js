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


function translateText(){
  fetch(`https://g-translate1.p.rapidapi.com/translate?text=${sourceText}&tl=${targetLang}&sl=${sourceLang}`,{

  method: 'GET',
	headers: {
		  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
	}, }).then((r) => r.json()).then((response) => {console.log("res", response);setLoading(false);
  setTranslationObject({...translationObject, [targetLang]: response.data.translation})})
  .catch((error) => {
	console.error(error)})}


  useEffect(() =>{
    fetch("/api/me")
    .then((r) =>{
      if(r.ok)
      {r.json().then((r) => {setUser(r); setIsLogged(true)})}
      else
      {console.log("/api/me says", r)}})
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
          <Route path="/" element={<Translate loading={loading} setLoading={setLoading} translateText={translateText}/>}/>
          <Route path="/expressions" element={<Expressions showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/words" element={<Words wordState={wordState} setWordState={setWordState} showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/stars" element={<Stars wordState={wordState} setWordState={setWordState} catSelected={catSelected} setCatSelected={setCatSelected} showListModal={showListModal} setShowListModal={setShowListModal} />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </> 
  )
}

export default App
