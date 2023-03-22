import React from "react";
import avatar from "../images/avatar.png"


function Header1() {


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
      <div className="login-container">
          <div className="login-text" >login</div>
          <img className="avatar" src={avatar}/>
     

        </div>
    </div>
  );
}

export default Header1;
