import WordCard from "../components/WordCard"
import { useContext, useState } from "react"
import { AppContext } from "../Context"
import ListModal from "../components/ListModal"

const Words = () => {
const {user} = useContext(AppContext)
const [showListModal, setShowListModal] = useState()
const [wordState, setWordState] = useState()

const wordMap = user?.words.map((word) => (<WordCard setWordState={setWordState}  key={word.id} word={word} setShowListModal={setShowListModal}/> ))

    return(
        <div className="expressions-page">
            <div className="expressions-page-container">
                {wordMap} 
            </div>
            {showListModal && <ListModal wordState={wordState} setShowListModal={setShowListModal}/>}
        </div>
    )
}

export default Words