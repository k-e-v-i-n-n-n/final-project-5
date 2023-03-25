import ExpressionCard from "../components/ExpressionCard"
import {useContext} from "react"
import { AppContext } from "../Context"

const Expressions = () => {

const {user} = useContext(AppContext)

const expressionMap = user?.expressions.map((expression) => (<ExpressionCard id={expression.id} expression={expression}/>))
    return(

        <div className="expressions-page">
            <div className="expressions-page-container">
                
                {expressionMap}
             
                
            </div>
        </div>
    )
}

export default Expressions