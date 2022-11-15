import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css'
import ImgLogo from "../assets/Tics.png"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <img className='img-fluid' src={ImgLogo} width="46"></img>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ms-4">
                  <NavLink to="/" className={({isActive})=>(isActive ?"activate" : "nav-link")}>Home</NavLink>
                </li>
                <li className="nav-item mx-4">
                   <NavLink to="/participantes" className={({isActive})=>(isActive ?"activate" : "nav-link")}>Participantes</NavLink>
                </li>
                <li className='nav-item'>
                   <NavLink to="/registro" className={({isActive})=>(isActive ?"activate" : "nav-link")}>Registro</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar