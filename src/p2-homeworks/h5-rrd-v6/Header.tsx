import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Pages";
import "./Header.css";

function Header() {
  return (
    <div id="menu">
      <h2>Select a page</h2>
      <ul id="list">
        <NavLink to={PATH.PRE_JUNIOR}>
          <li>Pre-junior</li>
        </NavLink>
        <NavLink to={PATH.JUNIOR}>
          <li>Junior</li>
        </NavLink>
        <NavLink to={PATH.JUNIORPLUS}>
          <li>Junior+</li>
        </NavLink>
        <NavLink to={"/*"}>
          <li>Test Error404</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
