import React from "react";
import "./LoginPage.css";
import {Login} from "../../components/login/Login";
import Topbar from "../../components/topbar/Topbar";

export const LoginPage = () => {
  return (
    <>
      <Topbar />
      <Login />
    </>
  );
};
