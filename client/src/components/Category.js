import { useContext } from "react"
import { AppContext } from "../Context"

const Category = ({cat}) => {

  const {user, setUser} = useContext(AppContext)

function deleteCat(){
  fetch(`/categories/${cat.id}`,{
    method: "DELETE"
  }).then(() => deleteState())}

  function deleteState(){

    const catArray = user.categories
    const catFilter = catArray.filter((c) => c.id != cat.id)
    const updatedUser = {...user, categories: catFilter}
    setUser(updatedUser)
  }

    return(

      <div className="category-card-container" >
        <p>{cat.category}</p>
        <div>
          <button className="category-delete-x" onClick={(e) => deleteCat(e)}>x</button>
        </div>
      </div>
        
    )
}

export default Category