import {useContext, useState} from "react"
import {AppContext} from "../Context";

function TextBoxes({translateText, setSaveMode, loading, setLoading}) {
  
  const {sourceLang, setSourceLang, targetLang, setTargetLang, translationObject, setTranslationObject} = useContext(AppContext)

  const initialState = {en: "", fr: "", type: ""}

  function switchLang(){
    setSourceLang(targetLang)
    setTargetLang(sourceLang)}

  function popText(e){
    setTranslationObject({...translationObject, [sourceLang]: e.target.value, [targetLang]: ""})}

  return (
    <>
      <div className="text-box-container">
        <textarea className="text-box" onChange={popText} value={translationObject[sourceLang]} placeholder={sourceLang == "en" ? "Enter a word or phrase in English..." : "Saisir un mot ou une expression en français..."}/>
          <button className="text-box-center" onClick={switchLang} >⮂</button>
        <textarea className={loading ? "textarea-loading" : "text-box"} value={translationObject[targetLang]} disabled />
      </div>

      <div className="translate-button-container">
        <button className="text-box-buttons" onClick={()=>{translateText(); setLoading(true)}}>translate</button>
        <button className="text-box-buttons" onClick={() => setSaveMode(true) }>save</button>
        <button className="text-box-buttons" onClick={() => {setTranslationObject(initialState); setLoading(false)}} >clear</button>
      </div>
  </>

  );
}

export default TextBoxes;
