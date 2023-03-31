import WordCard from "../components/WordCard"
import { useContext, useState } from "react"
import { AppContext } from "../Context"
import WordStarModal from "../components/WordStarModal"

const Words = ({showListModal, setShowListModal, wordState, setWordState}) => {
const {user} = useContext(AppContext)



const wordMap = user?.words.map((word) => (<WordCard setWordState={setWordState}  key={word.id} word={word} setShowListModal={setShowListModal}/> ))

    return(
        <div className="expressions-page">
            <div className="expressions-page-container">
                {wordMap} 
            </div>
            {showListModal && <WordStarModal wordState={wordState} setShowListModal={setShowListModal}/>}
        </div>
    )
}

export default Words