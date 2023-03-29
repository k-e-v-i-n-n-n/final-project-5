import WordCard from "../components/WordCard"
import { useContext } from "react"
import { AppContext } from "../Context"

const Words = () => {
const {user} = useContext(AppContext)

const wordMap = user?.words.map((word) => (<WordCard key={word.id} word={word}/> ))

    return(
        <div className="expressions-page">
            <div className="expressions-page-container">
                {wordMap} 
            </div>
        </div>
    )
}

export default Words