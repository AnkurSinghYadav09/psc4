import React from "react";
import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
