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
}, [sourceLang])

function save(e){
e.preventDefault()
let path
if (translationObject["type"] === "" || translationObject["fr"] === "" || translationObject["en"] === "")
{setAlert(true)}
else{
    if(postPath === "Expression")
    {path = "expressions"}
    else {path = "words"}

    fetch(`/api/${path}`, {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            french: translationObject["fr"],
            english: translationObject["en"],
            target: targetLang,
            })})
        .then((r) => r.json()).then((r) =>{setSaveMode(null);updateState(r, path);clearState()})}}
   

function updateState(r, path) {
    const userArr = user[path]
    userArr.push(r)
    const updatedUser = {...user, [path]: userArr}
    setUser(updatedUser)}

function popObject(e){
    setTranslationObject({...translationObject, [e.target.name]: e.target.value})}

function clearState(){
    const updatedOb = {...translationObject, [sourceLang]: "", [targetLang]:"", ["type"]:""}
    setTranslationObject(updatedOb); setPostPath()}

    function cancelState(){
        setPostPath()
        clearState()
        setSaveMode(null)}

    return (
        <div className="overlay">
            <div className="save-modal">
                <form className="save-form" >
                    <label className="modal-label" >{langOne}</label>
                    <input name={targetLang} className="modal-input" value={translationObject[targetLang]} onChange={(e) => popObject(e)} ></input>
                    <label  className="modal-label" >{langTwo}</label>
                    <input name={sourceLang} className="modal-input" value={translationObject[sourceLang]} onChange={(e) => popObject(e)} ></input>
                    <label className="modal-label">Type</label>
                    <select value={translationObject["type"]} className="modal-input" onChange={(e) => {setTranslationObject({...translationObject, type: e.target.value}); setPostPath(e.target.value)}} >
                        <option value="" defaultValue>-Select Entry Type-</option>
                        <option >Expression</option>
                        <option>Word</option>
                    </select>
                    {alert && <p id="error-modal">Please fill in all fields</p>}
                    <div className="modal-button-container">
                        <button id="modal-save" onClick={(e) => {save(e)}}>save</button>
                        <button id="modal-cancel" onClick={cancelState}>cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal