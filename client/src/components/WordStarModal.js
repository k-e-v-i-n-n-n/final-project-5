import { useContext, useState, useEffect } from "react"
import { AppContext } from "../Context"

const WordStarModal = ({setShowListModal, wordState, expState}) => {
    const {user, setUser} = useContext(AppContext)

    const [wordCat, setWordCat] = useState()
    const [expCat, setExpCat] = useState()  
    const [cat, setCat] = useState()
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [type, setType] = useState()
    const [modalObj, setModalObj] = useState({category_id: "", word_id: wordState.id})

    console.log("cat", cat)

    function activate(e){
    if(e.target.value != "")
    {setIsActive1(true); setIsActive2(false)}
    else {setIsActive1(false); setIsActive2(true)}}

    // function activate2(e){
    //     if(e.target.value != "")
    //     {setIsActive1(false); setIsActive2(true)}
    //     else {setIsActive1(true); setIsActive2(false)}}

    function updateCat(e){

        // setCat(e.target.value)
        setModalObj({...modalObj, category_id: e.target.value})
    }

    const expMap = user.expressions.map((exp) => <option key={exp.id} value={exp.french} disabled={isActive1}>{exp.french}</option>)
    const wordMap = user.words.map((word) => <option key={word.id}  value={word.french} disabled={isActive2}>{word.french}</option>)
    const catMap = user.categories.map((c) => <option key={c.id} value={c.id}>{c.category}</option>)

useEffect(() => {
    if(wordState != ""){setModalObj({...modalObj, word_id: wordState?.id, type: "Word"})}
    else if (expState != "")
    {setModalObj({...modalObj, expression_id: expState?.id, type: "Expression"})}
}, [expState, wordState])
    

    function makeList(e){
    e.preventDefault()
    // debugger
    fetch("/wordstars",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                category_id: modalObj["category_id"],
                word_id: modalObj["word_id"]

            }
            )})
    .then((r) => r.json()).then((r) => console.log("lists", r))}


    return(
<div className="overlay">
        <div className="add-category-container">
            <label className="modal-label">Category</label>
            <select value={modalObj["category_id"]} className="modal-input" onChange={(e) => {updateCat(e); activate(e)}}>
                <option value="" defaultValue >-Select Category-</option>
                {catMap}
            </select>

         
                <label className="modal-label">Word</label>
                <p className="modal-input">{wordState.french}</p>
                {/* <select value={wordCat} className="modal-input" onChange={(e) => {setWordCat(e.target.id); activate(e);  console.log("word", e)}}>
                    <option value="" defaultValue >-Select Word-</option>
                    {wordMap}
                    </select> */}
                {/* <label className="modal-label">Expression</label>
                <select value={expCat} className="modal-input" onChange={(e) => {setExpCat(e.target.value);activate2(e)}}>
                <option value="" defaultValue >-Select Expresion-</option>
                    {expMap}
                </select> */}
        

            <div className="modal-button-container">
                <button id="modal-save" onClick={(e) => {makeList(e); setShowListModal(false)}}>save</button>
                <button id="modal-cancel" onClick={() => setShowListModal(false)}>cancel</button>
            </div>

        </div>

</div>

    )
}

export default WordStarModal