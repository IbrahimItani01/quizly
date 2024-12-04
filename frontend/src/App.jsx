import React from "react";
import SideNav from "./components/base/SideNav";
import StatBar from "./components/base/StatBar";
import { Route, Routes } from "react-router-dom";
import "./styles/base.css";
import Welcome from "./components/Welcome/Welcome";
import AuthForm from "./components/AuthForm/AuthForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Panel from "./components/Panel/Panel";
import Quiz from "./components/Quiz/Quiz";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="main-panel">
          <SideNav />
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
                    <Quiz />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Provider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
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
