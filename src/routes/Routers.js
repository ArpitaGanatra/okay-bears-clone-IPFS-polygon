import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import BearMarket from "../pages/BearMarket/BearMarket";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bear-market" element={<BearMarket />} />
    </Routes>
  );
};

export default Routers;
