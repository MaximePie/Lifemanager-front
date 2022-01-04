import React from "react";
import {NavLink} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <NavLink className="Navbar__link" to={"/shop"}>Liste de courses</NavLink>
      <NavLink className="Navbar__link" to={"/tasks"}>Tâches</NavLink>
    </div>
  )
}