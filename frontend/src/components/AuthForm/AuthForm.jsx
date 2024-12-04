import React, { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../../apis/users";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ authType }) => {
    const navigate = useNavigate();
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="auth-form">
      <h2>{authType === "login" ? "Login" : "Create an Account"}</h2>
    </div>
  );
};
AuthForm.propTypes = {
  status: PropTypes.oneOf(["login", "register"]).isRequired,
};
export default AuthForm;
