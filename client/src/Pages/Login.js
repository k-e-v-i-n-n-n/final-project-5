import {useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../Context"

const Login = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirmation, setPasswordConfirmation] = useState()
    const [errors, setErrors] = useState()

    const navigate = useNavigate()
    const {setUser} = useContext(AppContext)

    function condRend(e){
        e.preventDefault()
        setIsSignup(!isSignup)}

    function createAccount (e){
        e.preventDefault()
            fetch("/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    {username, password, password_confirmation: passwordConfirmation}),})
                .then(r => handleResponse(r))}

    function login(e){
        e.preventDefault()
        fetch("/login", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})})
            .then(r => handleResponse(r))}

    function handleResponse(r){
        if(r.ok)
            {r.json().then((r) => {setUser(r); navigate("/")})}
        else 
            {r.json().then((err) => {setErrors(err.errors)})}}

    return(

        <div className="login-container" >
            <form className="login-form" >
                <label className="login-labels" >Username</label>
                <input type="text" value={username} placeholder="kevin@thefrenchthings.com" onChange={(e) => setUsername(e.target.value)} />
                <label className="login-labels">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {isSignup &&<label className="login-labels">Password Confirmation</label>}
                {isSignup && <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>}
                <div>
                    {errors?.map((err) => <p key={err} id="error-username">{err}</p>)}
                </div>
                <div className="login-button-container" >
                    {isSignup ? <button className="login-buttons" onClick={(e) => createAccount(e)} >submit</button> : <button className="login-buttons" onClick={(e) =>login(e)} >login</button>}
                    {!isSignup && <button className="login-buttons" onClick={(e) => condRend(e)}>create account</button>}
                    {isSignup && <button className="login-buttons" id="cancel" onClick={(e) => condRend(e)} >cancel</button> }
                </div>
            </form>
        </div>
    )
}

export default Login