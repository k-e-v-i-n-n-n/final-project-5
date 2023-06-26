import { useContext, useState } from "react"
import { AppContext } from "../Context"

const WordCard = ({word, setShowListModal, wordState, setWordState}) => {

  const {user, setUser} = useContext(AppContext)
  

  const [editMode, setEditMode] = useState(false)
  const [wordEdit, setWordEdit] = useState(word)

  function editWord(e){
    e.preventDefault()
    fetch(`/api/words/${word.id}`, {

      method:"PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({french: wordEdit.french, english: wordEdit.english})
    }).then((r) => r.json()).then((r) => {updateWordState(r); setEditMode(false)})
  }

  function setWord(e){
    setWordEdit({...wordEdit, [e.target.name]: e.target.value})
  }

  function deleteWord(e){
    e.preventDefault()
    fetch(`/api/words/${word.id}`, {method: "DELETE"})
    .then(() => deleteWordState())}

  function updateWordState(r){
    const wordArr = user.words
    const wordFilter = wordArr.filter((w) => w.id != word.id)
    wordFilter.push(r)
    setUser({...user, words: wordFilter})
  }

  function deleteWordState(){
    const wordArr = user.words
    const wordFilter = wordArr.filter((w) => w.id != word.id)
    const updatedUser = {...user, words: wordFilter}
    setUser(updatedUser)}

    return (

      <>
      {editMode ?
      
      <div className="word-edit-container" >
          <div className="word-edit-form-container" >
              <div className="word-edit-input" >
                <label className="edit-word-text">French</label>
                <input name="french" defaultValue={wordEdit.french} onChange={(e) => setWord(e)}/>
                <button id="modal-save" onClick={(e) => editWord(e)} >save</button>
              </div>
              <div className="word-edit-input" >
                <label name="english" className="edit-word-text" onChange={(e) => setWord(e)}>English</label>
                <input defaultValue={wordEdit.english}/>
                <button id="modal-cancel" onClick={() => setEditMode(false)}>cancel</button>
              </div>
          </div>
      </div> 
                  :
    
      <div className="expression-container" >
          <p className="target-expression-text">
            {word.french}
          </p>
          <p className="source-expression-text">
          {word.english}
          </p>
          <div className="hidden-buttons-container">
            <button className="card-delete-x" onClick={() => {setShowListModal(true); setWordState(word)}} >★</button>
            <button className="card-delete-x" onClick={() => setEditMode(true)}>✎</button>
            <button className="card-delete-x" onClick={(e) => deleteWord(e)}>x</button>
          </div>
      </div>
    }
      </>
    )
  } 
  
  export default WordCard