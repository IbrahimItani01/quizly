import React, { useContext } from "react";
import Logo from "../../logo.svg";
import { quizContext } from "../../context/QuizContext";
const SideNav = () => {
  const { quizzes } = useContext(quizContext);
  return (
    <div className='side-nav'>
      <div className='side-logo'>
        <img src={Logo} alt='logo' width={40}/>
        <h2>Quizly</h2>
      </div>
      <div className='side-bar'>
        {/* TODO: implement the logic to show the side titles if logged in */}
        <p>Create an account first 👀</p>
      </div>
      <div className='footer'>
        <em>Developed by Ibrahim Itani</em>
      </div>
    </div>
  )
}

export default SideNav
