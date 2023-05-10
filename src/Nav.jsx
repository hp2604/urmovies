
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


function Nav()
{
    return (
        <>
       
        <div className="p-3 mb-2 bg-warning text-dark">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
  
          
          
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact className="nav-link active" aria-current="page" to={"/urmovies"} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/urmovies/bollywood"}>Bollywood </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/urmovies/hollywood"}>Hollywood</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="https://github.com/hp2604/Urmovie.git">Git</NavLink>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
</div>

        </>
        
    )
    
}
export default Nav;