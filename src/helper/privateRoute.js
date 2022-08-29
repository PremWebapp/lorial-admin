import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { token } = useSelector(state => state.auth)
  return token ? <Outlet /> : <Navigate to="/login" />;
  // return  <Outlet /> 
};

export default PrivateRoute;