import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink className="NavBar__link" to={"/shop"}>🛒</NavLink>
      <NavLink className="NavBar__link" to={"/tasks"}>✔️</NavLink>
      <NavLink className="NavBar__link" to={"/events"}>🗓️️</NavLink>
    </div>
  )
}