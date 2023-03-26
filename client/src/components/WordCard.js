import { useContext } from "react"
import { AppContext } from "../Context"

const WordCard = ({word}) => {

  const {user, setUser} = useContext(AppContext)

  function deleteWord(e){
    e.preventDefault()
    fetch(`/words/${word.id}`, {method: "DELETE"})
    .then(() => updateWordState())}

  function updateWordState(){
    const wordArr = user.words
    const wordFilter = wordArr.filter((w) => w.id != word.id)
    const updatedUser = {...user, words: wordFilter}
    setUser(updatedUser)}

    return (
      <div className="expression-container" >
          <p className="target-expression-text">
            {word.french}
          </p>
          <p className="source-expression-text">
           {word.english}
          </p>
          <button className="card-delete-x" onClick={(e) => deleteWord(e)}>x</button>
      </div>
    )
  }
  
  export default WordCard