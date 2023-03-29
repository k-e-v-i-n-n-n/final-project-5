import {useState, useContext} from "react"
import { AppContext } from "../Context"
import Category from "../components/Category"
import CategoryList from "../components/CategoryList"
import CategoryModal from "../components/CategoryModal"

const Lists = () => {
    const [showModal, setShowModal] = useState(false)

    const {user} = useContext(AppContext)

    const catMap = user?.categories.map((cat) => <Category cat={cat}/>)
    return(
    <div className="category-page-container" >
         <CategoryList setShowModal={setShowModal}/>
         <div className="category-container" >
        {catMap}
        </div>
        {showModal && <CategoryModal setShowModal={setShowModal}/>}
    </div>
    )
}

export default Lists