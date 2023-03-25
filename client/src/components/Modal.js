import { useContext, useEffect, useState } from "react"
import { AppContext } from "../Context"

const Modal = ({setSaveMode}) => {
const {targetLang, sourceLang, translationObject, setTranslationObject} = useContext(AppContext)

const [langOne, setLangOne] = useState()
const [langTwo, setLangTwo] = useState()

useEffect(() => {
    if(sourceLang === "en"){setLangOne("French"); setLangTwo("English")}
    else{setLangOne("English"); setLangTwo("French")}  
}, sourceLang)

function save(e){
    e.preventDefault()

    fetch("/expressions", {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            french: translationObject["fr"],
            english: translationObject["en"],
            target: targetLang,
            })})
        .then((r) => r.json()).then((r) =>console.log("res", r))
}




{{
    
}}

    return (
        <div className="overlay">

            <div className="save-modal">
         
                <form className="save-form" >
                
                    <label className="modal-label" >{langOne}</label>
                    <input className="modal-input" value={translationObject[targetLang]} ></input>
                    <label className="modal-label" >{langTwo}</label>
                    <input className="modal-input" value={translationObject[sourceLang]} ></input>

                    <label>Type</label>
                    <select className="modal-input" onChange={(e) => setTranslationObject({...translationObject, type: e.target.value})} >
                        <option value="" defaultValue selected={true} >-Select Entry Type-</option>
                        <option>expression</option>
                        <option>word</option>
                    </select>
                    <div className="modal-button-container">
                        <button id="modal-save" onClick={(e) => {save(e); setSaveMode(null)}} >save</button>
                        <button id="modal-cancel" onClick={() => setSaveMode(null)}>cancel</button>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Modal