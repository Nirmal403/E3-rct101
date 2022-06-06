import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
  

const Login = () => {
  return (
    <div className="login">
      <input data-cy="login-email" name ="email" placeholder="Enter mail"/>
      <input data-cy="login-password" placeholder = "Enter password"/>
      <button data-cy="login-submit" >Login</button>
    </div>
  );
};

export default Login;
