import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";
import TextBoxes from "../components/TextBoxes";
import Modal from "../components/Modal";

const Translate = ({translateText, setLoading, loading}) => {

    const navigate = useNavigate()
    const {isLogged} = useContext(AppContext)

    const [saveMode, setSaveMode] = useState(null)

    function routeIt(){
        if (isLogged === false){
            navigate("/login")}
    }

return (
    <div className="translate-page" onClick={routeIt}>
        <TextBoxes loading={loading} setLoading={setLoading} translateText={translateText} setSaveMode={setSaveMode}/>
        {saveMode && <Modal setSaveMode={setSaveMode}/>}
    </div>
)

}

export default Translate