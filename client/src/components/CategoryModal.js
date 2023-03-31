import { useContext, useState } from "react"
import { AppContext } from "../Context"

const CategoryModal = ({setShowModal}) => {
    const {user, setUser} = useContext(AppContext)
    const [cat, setCat] = useState("")
    const [error, setError] = useState()
  
    function makeCat(e){
        e.preventDefault()

        if (cat === ""){
            setError("Please enter a category")}
        else{
        fetch("/categories",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
            category: cat})})
        .then((r) => r.json()).then((r) => {updateCatState(r); setShowModal(false)})}}

    function updateCatState(r){
        const catArray = user.categories
        catArray.push(r)
        const updatedUser = {...user, categories: catArray}
        setUser(updatedUser)
    }
    return(
        <div className="overlay">
            <div className="add-category-container">
                <label className="modal-label">Category</label>
                <input value={cat} placeholder="Holidays" className="modal-input" onChange={(e)=> setCat(e.target.value)} />
                <div className="error-category-container" >
                    {error && <p id="error-category">{error}</p>}
                </div>
                <div className="modal-button-container">
                    <button id="modal-save" onClick={(e) => {makeCat(e)}}>save</button>
                    <button id="modal-cancel" onClick={() => setShowModal(false)}>cancel</button>
                </div>
            </div>

         

        </div>



    )
}

export default CategoryModal