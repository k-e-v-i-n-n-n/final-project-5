import React from "react";
import {Link} from "react-router-dom"



function Header2({setCatSelected}) {


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
        <Link to="/stars">
        <button className="nav-buttons" onClick={()=> setCatSelected(false)}>stars</button>
        </Link>
    </div>
  )
}

export default Header2;
