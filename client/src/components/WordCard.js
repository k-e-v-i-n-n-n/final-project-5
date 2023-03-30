import { useContext } from "react"
import { AppContext } from "../Context"

const WordCard = ({word, setShowListModal, wordState, setWordState}) => {

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
          <div className="hidden-buttons-container">
            <button className="card-delete-x" onClick={() => {setShowListModal(true); setWordState(word)}} >★</button>
            <button className="card-delete-x" onClick={(e) => deleteWord(e)}>x</button>
          </div>
      </div>
    )
  }
  
  export default WordCard