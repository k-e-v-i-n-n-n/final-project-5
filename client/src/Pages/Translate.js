import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";
import TextBoxes from "../components/TextBoxes";
import Modal from "../components/Modal";

const Translate = ({translateText}) => {

    const navigate = useNavigate()
    const {isLogged} = useContext(AppContext)

    const [saveMode, setSaveMode] = useState(null)

    console.log("isLogged", isLogged)

    function routeIt(){
        if (isLogged === false){
            navigate("/login")}
    }



return (
    <div className="translate-page" onClick={routeIt}>
        <TextBoxes translateText={translateText} setSaveMode={setSaveMode}/>
        {saveMode && <Modal setSaveMode={setSaveMode}/>}
    </div>
)

}

export default Translate