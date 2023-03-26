import {useState} from "react"
import Category from "../components/Category"
import CategoryList from "../components/CategoryList"
import CategoryModal from "../components/CategoryModal"

const Lists = () => {
    const [showModal, setShowModal] = useState(false)

    return(
    <div className="category-page-container" >
         <CategoryList setShowModal={setShowModal}/>
         <div className="category-container" >
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
        {showModal && <CategoryModal setShowModal={setShowModal}/>}
    </div>
    )
}

export default Lists