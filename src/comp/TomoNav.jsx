import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "../css/TomoNav.css";

function TomoNav({ children }) {
  return (
    <BrowserRouter>
      {children}
      <div className="nav">
        <NavLink to="/">🏠</NavLink>
        <NavLink to="/event">🥳</NavLink>
        <NavLink to="/manitto">🤫</NavLink>
        <NavLink to="/setting">⚙️</NavLink>
      </div>
    </BrowserRouter>
  );
}

export default TomoNav;
