import React from "react";
import { Routes, Route } from "react-router-dom";
import TomoHome from "./TomoHome";
import TomoEvent from "./TomoEvent";
import TomoManitto from "./TomoManitto";
import TomoSetting from "./TomoSetting";
import TomoNav from "./TomoNav";

function TomoMain() {
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

export default TomoMain;
