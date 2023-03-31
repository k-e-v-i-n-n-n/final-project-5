import { useContext } from "react"
import { AppContext } from "../Context"

const WordStarCard = ({word}) => {

  const {user, setUser} = useContext(AppContext)

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
      </div>
    )
  }
  
  export default WordStarCard