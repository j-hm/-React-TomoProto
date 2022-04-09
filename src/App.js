import React from "react";
import { Routes, Route } from "react-router-dom";
import TomoHome from "./comp/TomoHome";
import TomoEvent from "./comp/TomoEvent";
import TomoManitto from "./comp/TomoManitto";
import TomoSetting from "./comp/TomoSetting";
import TomoNav from "./comp/TomoNav";

function App() {
  return (
    <TomoNav>
      <Routes>
        <Route path="/" element={<TomoHome />} />
        <Route path="/event" element={<TomoEvent />} />
        <Route path="/manitto" element={<TomoManitto />} />
        <Route path="/setting" element={<TomoSetting />} />
      </Routes>
    </TomoNav>
  );
}

export default App;
