import { useState } from "react";
import TextBoxes from "../components/TextBoxes";
import Modal from "../components/Modal";

const Translate = ({translateText}) => {
    const [saveMode, setSaveMode] = useState(null)

return (
    <div className="translate-page">
        <TextBoxes translateText={translateText} setSaveMode={setSaveMode}/>
        {saveMode && <Modal setSaveMode={setSaveMode}/>}
    </div>
)

}

export default Translate