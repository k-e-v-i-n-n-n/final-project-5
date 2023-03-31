import { useContext, useState } from "react"
import { AppContext } from "../Context"

const WordStarModal = ({setShowListModal, wordState}) => {
    const {user} = useContext(AppContext)
    const [modalObj, setModalObj] = useState({category_id: "", word_id: wordState.id})
   
    function updateCat(e){
        setModalObj({...modalObj, category_id: e.target.value})
    }

    const catMap = user.categories.map((c) => <option key={c.id} value={c.id}>{c.category}</option>)

    function makeList(e){
        e.preventDefault()
        if(modalObj["category_id"] === "")
        {alert("Please select a category")}
        else {
        fetch("/wordstars",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({category_id: modalObj["category_id"], word_id: modalObj["word_id"] })})
        .then((r) => r.json()).then((r) =>{ setShowListModal(false); starState(r); console.log("wordstar", r)})}}

function starState(r){

    const catArr = user.categories
    const singleCat = catArr.find((c) => c.id == r.category.id)
    const wordsArr = singleCat.words
    wordsArr.push(r.word)
    const newCategories = {...catArr, words: wordsArr}
    const updatedUser = {...user, categories: newCategories}
}


    return(
    <div className="overlay">
        <div className="add-category-container">
            <label className="modal-label">Category</label>
            <select value={modalObj["category_id"]} className="modal-input" onChange={(e) => {updateCat(e)}}>
                <option value="" defaultValue >-Select Category-</option>
                {catMap}
            </select>

            <div className="cat-word-form-container" >
              <div className="cat-edit-values" >
              <p className="edit-word-text" >{wordState.french}</p> 
                <label className="cat-modal-labels" >French</label>
              </div>
              <div className="cat-edit-values" >
              <p className="edit-word-text">{wordState.english}</p> 
                <label className="cat-modal-labels" >English</label>
              </div>
          </div>
            <div className="cat-button-container">
                <div className="container-within" >
                    <button id="modal-save" onClick={(e) => {makeList(e)}}>save</button>
                </div>
                <div className="container-within">
                    <button id="modal-cancel" onClick={() => setShowListModal(false)}>cancel</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WordStarModal