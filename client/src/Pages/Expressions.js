import ExpressionCard from "../components/ExpressionCard"
import {useContext, useState} from "react"
import { AppContext } from "../Context"
import WordStarModal from "../components/WordStarModal"

const Expressions = ({setShowListModal}) => {

const {user, isLogged} = useContext(AppContext)
const [expState, setExpState] = useState()


const expressionMap = user?.expressions.map((expression) => (<ExpressionCard setExpState={setExpState} setShowListModal={setShowListModal} key={expression.id} expression={expression}/>))
    
return(

    <>
    {isLogged? 
            <div className="expressions-page">
                <div className="expressions-page-container">
                    {expressionMap}
                </div>
            </div>
             :
           <div className="landing-page">
            <p>Please Login</p> 
            </div>}    
    </>
    )
}

export default Expressions