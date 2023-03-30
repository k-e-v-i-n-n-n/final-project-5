import ExpressionCard from "../components/ExpressionCard"
import {useContext, useState} from "react"
import { AppContext } from "../Context"


const Expressions = () => {

const {user} = useContext(AppContext)
const [expState, setExpState] = useState()
const [showListModal, setShowListModal] = useState()

const expressionMap = user?.expressions.map((expression) => (<ExpressionCard setShowListModal={setShowListModal} setExpState={setExpState} key={expression.id} expression={expression}/>))
    
return(
        <div className="expressions-page">
            <div className="expressions-page-container">
                {expressionMap}
            </div>
            {/* {showListModal && <ListModal expState={expState} setShowListModal={setShowListModal}/>} */}
        </div>
    )
}

export default Expressions