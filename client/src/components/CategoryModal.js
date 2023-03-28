import { useContext, useState } from "react"
import { AppContext } from "../Context"

const CategoryModal = ({setShowModal}) => {
    const {user, setUser} = useContext(AppContext)

    const [wordCat, setWordCat] = useState()
    const [expCat, setExpCat] = useState()  
    const [cat, setCat] = useState()
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)

    function activate(e){
    if(e.target.value != "")
    {setIsActive1(true); setIsActive2(false)}
    else {setIsActive1(false); setIsActive2(true)}}

    function activate2(e){
        if(e.target.value != "")
        {setIsActive1(false); setIsActive2(true)}
        else {setIsActive1(true); setIsActive2(false)}}

    const expMap = user.expressions.map((exp) => <option value={exp.french} disabled={isActive1}>{exp.french}</option>)
    const wordMap = user.words.map((word) => <option value={word.french} disabled={isActive2}>{word.french}</option>)

   function makeList(e){
    e.preventDefault()

    let key
    let value
    if(wordCat != ""){key = "word"; value = wordCat}
    else if (expCat != "")
    {key = "expression"; value = expCat}

    fetch("/lists",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
        [key]: value,
        categories_attributes: [cat]


    })})
    .then((r) => r.json()).then((r) => console.log("cat r", r))

}
   



    return(
<div className="overlay">
        <div className="add-category-container">
            <label className="modal-label">Category</label>
            <input className="modal-input"  />
            
            <p>Select one of the following</p>
            <div className="category-type-container" >
                 <label className="modal-label">Word</label>
                <select value={wordCat} className="modal-input" onChange={(e) => {setWordCat(e.target.value); activate(e);  console.log("word", e)}}>
                    <option value="" defaultValue >-Select Word-</option>
                    {wordMap}
                    </select>
                <label className="modal-label">Expression</label>
                <select value={expCat} className="modal-input" onChange={(e) => {setExpCat(e.target.value);activate2(e)}}>
                <option value="" defaultValue >-Select Expresion-</option>
                    {expMap}
                </select>
            </div>

            <div className="modal-button-container">
                <button id="modal-save" onClick={(e) => makeList(e)}>save</button>
                <button id="modal-cancel" onClick={() => setShowModal(false)}>cancel</button>
            </div>

        </div>

</div>

    )
}

export default CategoryModal