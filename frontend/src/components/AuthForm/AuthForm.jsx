import React, { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../functions/authUser";
import { toast } from "react-toastify";

const AuthForm = ({ authType }) => {
  const navigate = useNavigate();
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Add a loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true); // Set loading to true
      const user = await authUser(authType, authForm); // Call authentication
      setLoading(false); // Set loading to false
      console.log(user)
  
      if (user) {
        setAuthForm({
          name: "",
          email: "",
          password: "",
        });
        navigate("/panel"); // Navigate to the dashboard
      }
    } catch (error) {
      setLoading(false); // Ensure loading stops in case of an error
      console.error("Error during registration:", error);
      toast.error("Something went wrong ⛔");
    }
  };
  

  const handleNavigate = (e) => {
    const text = e.target.textContent;
    if (text === "Login") navigate("/login");
    if (text === "Register") navigate("/register");
  };

  return (
    <div className="auth-form">
      <h2>{authType === "login" ? "Login" : "Create an Account"}</h2>
      <div>
        {authType === "login" ? (
          <>
            <InputField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={authForm.email}
              onChange={handleChange}
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={authForm.password}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <InputField
              name="name"
              label="Name"
              type="text"
              placeholder="Enter your name"
              value={authForm.name}
              onChange={handleChange}
            />
            <InputField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={authForm.email}
              onChange={handleChange}
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={authForm.password}
              onChange={handleChange}
            />
          </>
        )}
      </div>
      <Button
        text={authType === "login" ? "Login" : "Register"}
        design="action"
        onClick={handleSubmit}
        disabled={loading} // Disable button while loading
      />
      {authType === "login" ? (
        <em>
          Don't have an account? <span onClick={handleNavigate}>Register</span>
        </em>
      ) : (
        <em>
          Have an account? <span onClick={handleNavigate}>Login</span>
        </em>
      )}
    </div>
  );
};

AuthForm.propTypes = {
  authType: PropTypes.oneOf(["login", "register"]).isRequired,
};

export default AuthForm;
