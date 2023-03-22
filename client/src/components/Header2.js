import React from "react";
import {Link} from "react-router-dom"



function Header2() {


  return (
    <div className="header-2">
        <Link to="/">
          <button className="nav-buttons">translate</button>
        </Link>
        <Link to="/expressions">
          <button className="nav-buttons">expressions</button>
        </Link>
        <Link to="/words">
         <button className="nav-buttons">words</button>
        </Link>
        <Link to="/lists">
        <button className="nav-buttons">lists</button>
        </Link>
    </div>
  )
}

export default Header2;
