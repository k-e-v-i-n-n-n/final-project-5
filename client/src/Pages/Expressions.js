import ExpressionCard from "../components/ExpressionCard"
import {useContext, useState} from "react"
import { AppContext } from "../Context"
import WordStarModal from "../components/WordStarModal"

const Expressions = ({showListModal, setShowListModal}) => {

const {user} = useContext(AppContext)
const [expState, setExpState] = useState()


const expressionMap = user?.expressions.map((expression) => (<ExpressionCard setExpState={setExpState} setShowListModal={setShowListModal} key={expression.id} expression={expression}/>))
    
return(
        <div className="expressions-page">
            <div className="expressions-page-container">
                {expressionMap}
            </div>
            {/* {showListModal && <WordStarModal expState={expState} setShowListModal={setShowListModal}/>} */}
        </div>
    )
}

export default Expressions