import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";

function TomoNav({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Navi>
        <NavLink to="/">π </NavLink>
        <NavLink to="/event">π₯³</NavLink>
        <NavLink to="/manitto">π€«</NavLink>
        <NavLink to="/setting">βοΈ</NavLink>
      </Navi>
    </BrowserRouter>
  );
}

// nav μμΉ μμ 
const Navi = styled.div`
  background-color: #eee;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;

  > a {
    flex: 1;
    padding: 16px 8px;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: gold;
      cursor: pointer;
    }
  }
`;

export default TomoNav;
