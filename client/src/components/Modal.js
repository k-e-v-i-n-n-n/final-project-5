import { useContext, useEffect, useState } from "react"
import { AppContext } from "../Context"

const Modal = ({setSaveMode}) => {
const {targetLang, sourceLang, translationObject, setTranslationObject} = useContext(AppContext)
const {user, setUser} = useContext(AppContext)

const [langOne, setLangOne] = useState()
const [langTwo, setLangTwo] = useState()
const [postPath, setPostPath] =useState()
const [alert, setAlert] = useState(false)

useEffect(() => {
    if(sourceLang === "en"){setLangOne("French"); setLangTwo("English")}
    else{setLangOne("English"); setLangTwo("French")}  
}, sourceLang)

function save(e, path){
e.preventDefault()
if (translationObject["type"] === "")
{setAlert(true)}
else{
    if(postPath === "expression")
    {path = "expressions"}
    else {path = "words"}

    fetch(`/${path}`, {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            french: translationObject["fr"],
            english: translationObject["en"],
            target: targetLang,
            })})
        .then((r) => r.json()).then((r) =>{console.log("res", r); setSaveMode(null);updateState(r, path) })}}

   

function updateState(r, path) {
    const userArr = user[path]
    userArr.push(r)
    const updatedUser = {...user, [path]: userArr}
    setUser(updatedUser)
}

function popObject(e){
    setTranslationObject({...translationObject, [e.target.name]: e.target.value})
}

    return (
        <div className="overlay">
            <div className="save-modal">
                <form className="save-form" >
                    <label className="modal-label" >{langOne}</label>
                    <input name={targetLang} className="modal-input" value={translationObject[targetLang]} onChange={(e) => popObject(e)} ></input>
                    <label  className="modal-label" >{langTwo}</label>
                    <input name={sourceLang} className="modal-input" value={translationObject[sourceLang]} onChange={(e) => popObject(e)} ></input>
                    <label>Type</label>
                    <select className="modal-input" onChange={(e) => {setTranslationObject({...translationObject, type: e.target.value}); setPostPath(e.target.value)}} >
                        <option value="" defaultValue selected={true} >-Select Entry Type-</option>
                        <option>expression</option>
                        <option>word</option>
                    </select>
                    {alert && <p id="error-username">Please select entry Type</p>}
                    <div className="modal-button-container">
                        <button id="modal-save" onClick={(e) => {save(e)}} >save</button>
                        <button id="modal-cancel" onClick={() => setSaveMode(null)}>cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal