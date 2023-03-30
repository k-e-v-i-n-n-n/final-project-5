import { useContext } from "react"
import { AppContext } from "../Context"

const ExpressionCard = ({expression, setShowListModal}) => {

  const {user, setUser} = useContext(AppContext)

  function deleteExp(e){
    e.preventDefault()
    fetch(`/expressions/${expression.id}`, {
      method: "DELETE"}).then(() => updateExp())}

  function updateExp(){
    const expArr = user.expressions
    const expFilter = expArr.filter((exp) => exp.id != expression.id)
    const updatedUser = {...user, expressions: expFilter}
    setUser(updatedUser)
  }
      



  return (
    <div className="expression-container" >
        <p className="target-expression-text">
          {expression.french}
        </p>
        <p className="source-expression-text">
          {expression.english}
        </p>
        <div className="hidden-buttons-container">
            <button className="card-delete-x" onClick={() => setShowListModal(true)} >★</button>
          <button className="card-delete-x" onClick={(e) => deleteExp(e)}>x</button>
        </div>
    </div>
  )
}

export default ExpressionCard
