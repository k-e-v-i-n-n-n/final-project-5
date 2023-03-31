const CategoryList = ({setShowModal}) => {


    return(
    <>
    
         <div className="category-title-container" >
            <div className="categories-title" >Select a Category or</div>
            <button className="add-new-button" onClick={() => setShowModal(true)} >Add New Category</button>
         </div>
        
    </>
    )
}

export default CategoryList