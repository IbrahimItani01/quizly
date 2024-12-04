import React, { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../../apis/users";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ authType }) => {
AuthForm.propTypes = {
  status: PropTypes.oneOf(["login", "register"]).isRequired,
};
export default AuthForm;
