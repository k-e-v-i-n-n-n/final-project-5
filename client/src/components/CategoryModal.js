const CategoryModal = ({setShowModal}) => {

    return(
<div className="overlay">
        <div className="add-category-container">
            <label className="modal-label">Category</label>
            <input className="modal-input"  />
            <label className="modal-label">Word</label>
            <select className="modal-input">
                <option></option>
            </select>
            <label className="modal-label">Expression</label>
            <select className="modal-input">
                <option></option>
            </select>

            <div className="modal-button-container">
                <button id="modal-save"  >save</button>
                <button id="modal-cancel" onClick={() => setShowModal(false)}>cancel</button>
            </div>

        </div>

</div>

    )
}

export default CategoryModal