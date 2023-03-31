import {createContext, useState} from "react"

const AppContext = createContext()

const UserProvider = ({children}) => {
const [user, setUser] = useState()
const [sourceLang, setSourceLang] = useState("en")
const [targetLang, setTargetLang] = useState("fr")
const [translationObject, setTranslationObject] = useState({en: "", fr: "", type: "",})
const [isLogged, setIsLogged] = useState(false)


    return(
    
        <AppContext.Provider value={{user, setUser, sourceLang, setSourceLang, targetLang, setTargetLang, translationObject, setTranslationObject, isLogged, setIsLogged}}>
            {children}
        </AppContext.Provider>

    )
}

export {AppContext, UserProvider}