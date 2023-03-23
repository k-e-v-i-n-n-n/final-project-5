import Category from "../components/Category"
import CategoryList from "../components/CategoryList"

const Lists = () => {


    return(
    <div className="category-page-container" >
    
         <CategoryList/>

         <div className="category-container" >
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
        </div>
    )
}

export default Lists