const CategoryList = ({setShowModal}) => {


    return(
    <>
    
         <div className="category-title-container" >
            <div className="categories-title" >Select ⇩ or ⇨ </div>
            <button className="add-new-button" onClick={() => setShowModal(true)} >Add New</button>
         </div>
        
    </>
    )
}

export default CategoryList