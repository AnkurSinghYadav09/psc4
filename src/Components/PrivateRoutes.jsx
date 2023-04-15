import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  console.log(isAuth);
  const navigate = useNavigate();

  //   if (!isAuth) {
  //     navigate("/login");
  //   }

  return <div>{isAuth ? children : navigate("/login")}</div>;
};

export default PrivateRoutes;
