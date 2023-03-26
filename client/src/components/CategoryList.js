const CategoryList = ({setShowModal}) => {


    return(
    <>
    
         <div className="category-title-container" >
            <div className="categories-title" >Categories</div>
            <button className="add-new-button" onClick={() => setShowModal(true)} >add new</button>
         </div>
        
    </>
    )
}

export default CategoryList