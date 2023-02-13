import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  return (
    <>

    <div className="nav-container">
        <div><NavLink to="/">Home</NavLink></div>
        <div><NavLink to="/AddCard">Add Card</NavLink></div>
        <div><NavLink to="/Goals">Goals</NavLink></div>
        <div><NavLink to="/UpdatePicture">Update Picture</NavLink></div>
    </div>
    

 
    </>
  );
};

export default Nav;
