import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import AddCity from "./AddCity";
import DashBoard from "./DashBoard";
import Login from "./Login";
import SignUp from "./SignUp";
import List from "./List";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addcity" element={<AddCity />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/list" element={<List/>} />
    </Routes>
  );
};

export default AllRoutes;
