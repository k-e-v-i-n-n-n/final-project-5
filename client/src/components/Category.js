import { useContext } from "react"
import { AppContext } from "../Context"

const Category = ({category, setCatSelected}) => {

  const {user, setUser} = useContext(AppContext)

function deleteCat(e){
  e.stopPropagation()
  fetch(`/categories/${category.id}`,{
    method: "DELETE"
  }).then(() => deleteState())}

  function deleteState(){
    const catArray = user.categories
    const catFilter = catArray.filter((c) => c.id != category.id)
    const updatedUser = {...user, categories: catFilter}
    setUser(updatedUser)}

    return(

      <div className="category-card-container" onClick={()=>setCatSelected(category)} >
        <p className="category-title" >{category.category}</p>
        <div onClick={(e) => {deleteCat(e)}}>
          <button className="category-delete-x" >x</button>
        </div>
      </div>
        
    )
}

export default Category