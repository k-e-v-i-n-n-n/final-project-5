import { useContext } from "react"
import { AppContext } from "../Context"

const Category = ({category, setCatSelected}) => {

  const {user, setUser} = useContext(AppContext)

function deleteCat(e){
  e.stopPropagation()
  fetch(`/api/categories/${category.id}`,{
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
        {/* <div  > */}
          <button className="category-delete-x" onClick={(e) => {deleteCat(e)}}  >x</button>
        {/* </div> */}
      </div>
        
    )
}

export default Category