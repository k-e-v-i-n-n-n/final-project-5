import WordCard from "../components/WordCard"
import { useContext, useState } from "react"
import { AppContext } from "../Context"
import WordStarModal from "../components/WordStarModal"

const Words = ({showListModal, setShowListModal, wordState, setWordState}) => {
const {user, isLogged} = useContext(AppContext)



const wordMap = user?.words.map((word) => (<WordCard setWordState={setWordState}  key={word.id} word={word} setShowListModal={setShowListModal}/> ))

return(
        <>
        {isLogged?<div className="expressions-page">
                    <div className="expressions-page-container">
                        {wordMap} 
                    </div>
                    {showListModal && <WordStarModal wordState={wordState} setShowListModal={setShowListModal}/>}
                    </div> 
        :   
        
             <div className="landing-page">
                <p>Please Login</p> 
            </div>}
        </>


        
    )
}

export default Words