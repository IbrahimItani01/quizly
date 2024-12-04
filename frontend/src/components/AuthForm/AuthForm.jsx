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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit =  () => {
    if (authType === "login") {
      if (authForm.email && authForm.password) {
        if (loginUser(authForm)) {
          toast.success("Logged in 🎊");
          localStorage.setItem("authenticated", "true");
          setAuthForm({
            name: "",
            email: "",
            password: "",
          });
        } else {
          toast.error("Something went wrong ⛔");
        }
      } else {
        toast.error("You missed an input 🤭");
      }
    } else {
  };
  const handleNavigate = (e)=>{
    e.target.textContent==="Login" && navigate("/login");
    e.target.textContent==="Register" && navigate("/register");
  }
  return (
    <div className="auth-form">
      <h2>{authType === "login" ? "Login" : "Create an Account"}</h2>
      <div>
        {authType === "login" ? (
          <>
            <InputField
              name={"email"}
              label={"Email"}
              type={"email"}
              placeholder={"enter your email"}
              value={authForm.email}
              onChange={handleChange}
            />
            <InputField
              name={"password"}
              label={"Password"}
              type={"password"}
              placeholder={"enter your password"}
              value={authForm.password}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <InputField
              name={"name"}
              label={"Name"}
              type={"text"}
              placeholder={"enter your name"}
              value={authForm.name}
              onChange={handleChange}
            />
            <InputField
              name={"email"}
              label={"Email"}
              type={"email"}
              placeholder={"enter your email"}
              value={authForm.email}
              onChange={handleChange}
            />
            <InputField
              name={"password"}
              label={"Password"}
              type={"password"}
              placeholder={"enter your password"}
              value={authForm.password}
              onChange={handleChange}
            />
          </>
        )}
      </div>
      <Button
        text={authType === "login" ? "login" : "register"}
        design={"action"}
        onClick={handleSubmit}
      />
      {
        authType==="login"? (
            <em>Don't have an account? <span onClick={handleNavigate}>Register</span></em>
        ):(
            <em>Have an account? <span onClick={handleNavigate}>Login</span></em>

        )
      }
    </div>
  );
};
AuthForm.propTypes = {
  status: PropTypes.oneOf(["login", "register"]).isRequired,
};
export default AuthForm;
