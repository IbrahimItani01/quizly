import React, { useEffect } from "react";
import SideNav from "./components/base/SideNav";
import StatBar from "./components/base/StatBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles/base.css";
import Welcome from "./components/Welcome/Welcome";
import AuthForm from "./components/AuthForm/AuthForm";
import UserProvider from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QuizProvider } from "./context/QuizContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Panel from "./components/Panel/Panel";
import Quiz from "./components/Quiz/Quiz";
function App() {
  return (
    <>
      <UserProvider>
        <div className="main-panel">
          <QuizProvider>
            <SideNav />
          </QuizProvider>
          <div className="content-panel">
            <StatBar />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<AuthForm authType={"login"} />} />
              <Route
                path="/register"
                element={<AuthForm authType={"register"} />}
              />
              <Route
                path="/panel"
                element={
                  <ProtectedRoute>
                    <Panel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/quiz/:id"
                element={
                  <ProtectedRoute>
                    <QuizProvider>
                      <Quiz />
                    </QuizProvider>
                  </ProtectedRoute>
                }
              />
               <Route
                path="/complete"
                element={
                  <ProtectedRoute>
                    <QuizProvider>
                      {/* TODO: implement a congrats component */}
                      <div>congrats</div>
                    </QuizProvider>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}

export default App;
