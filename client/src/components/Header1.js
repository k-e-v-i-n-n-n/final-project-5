import {React, useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import { AppContext } from "../Context"
import avatar from "../images/avatar.png"


function Header1() {
  const {user, setUser} = useContext(AppContext)
  const navigate = useNavigate()

  const loggedIn = <p className="login-text" id ="logged-in-text">Bonjour, {user?.username}</p> 
                      
  const loggedOut = <> <Link to="/login">
                          <div className="login-text">login</div>
                        </Link> </>

function logOut() {
  fetch("/logout",{
      method:"DELETE"
  })
  .then(() => {setUser(""); navigate("/login") })
}


  return (
    <div className="header-1">
      <div className="invisible-container" ></div>
      <div className="header-logo-container">
        <div className="header-flag">
          <div className="blue"></div>
          <div className="white"></div>
          <div className="red"></div>
        </div>
        <div className="header-logo-text">
          <h1 className="title valign-text-middle">the french things</h1>
        </div>
      </div>
      <div className="login-icon-container">
      <div className="logged-in-or-out" >
      {user? loggedIn : loggedOut}
      </div>
      <div className="avatar-container" >
          <img className="avatar" src={avatar}/>
          {user && <button className="login-text" id="logout" onClick={logOut}>logout</button>}
          
      </div>
      
        </div>
        <div id="right-side-invisible"></div>
    </div>
  );
}

export default Header1;
