import React from 'react'
import "./style.css"
import PropTypes from "prop-types";

const Button = ({text,onClick,disabled=false,design}) => {
  return (
   <button className={design==="action"?"action":"outline"} onClick={onClick} disabled={disabled}>{text}</button>
  )
}
Button.propTypes = {
    status: PropTypes.oneOf(["action", "outline"]).isRequired,
  };
export default Button
