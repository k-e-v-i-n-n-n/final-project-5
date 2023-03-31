import { useContext, useState, useEffect } from "react"
import { AppContext } from "../Context"

const WordStarModal = ({setShowListModal, wordState}) => {
    const {user, setUser} = useContext(AppContext)
    const [modalObj, setModalObj] = useState({category_id: "", word_id: wordState.id})
    // const [key1, setKey1] = useState()
    // const [key2, setKey2] = useState()
    // const [value1, setValue1] = useState()
    // const [label1, setLabel1] = useState()
    // const [text1, setText1] = useState()

    function updateCat(e){
        setModalObj({...modalObj, category_id: e.target.value})
    }

    const catMap = user.categories.map((c) => <option key={c.id} value={c.id}>{c.category}</option>)

// useEffect(() => {
//     if (wordState != undefined){
//         setKey1("word_id");
//         setKey2("expression_id")
//         setValue1(wordState.id)
//         setLabel1("Word")
//         setText1(wordState.french)}
//         else if (expState != undefined){
//             setKey1("expression_id")
//             setValue1(expState.id)
//             setKey2("word_id")
//             setLabel1("Expression")
//             setText1(expState.french)}
  
// }, [expState, wordState])


    

function makeList(e){
    e.preventDefault()
    if(modalObj["category_id"] === ""){
        alert("Please select a category")}
    else {

    fetch("/wordstars",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                category_id: modalObj["category_id"], 
                word_id: modalObj["word_id"] 
    
    })})
        .then((r) => r.json()).then((r) =>{ setShowListModal(false); console.log("lists", r)})}}

    return(
    <div className="overlay">
        <div className="add-category-container">
            <label className="modal-label">Category</label>
            <select value={modalObj["category_id"]} className="modal-input" onChange={(e) => {updateCat(e)}}>
                <option value="" defaultValue >-Select Category-</option>
                {catMap}
            </select>
                <label className="modal-label">Word</label>
                <p className="modal-input">{wordState.french}</p>
            <div className="modal-button-container">
                <button id="modal-save" onClick={(e) => {makeList(e)}}>save</button>
                <button id="modal-cancel" onClick={() => setShowListModal(false)}>cancel</button>
            </div>
        </div>
    </div>
    )
}

export default WordStarModal