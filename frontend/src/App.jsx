import SideNav from "./components/base/SideNav";
import StatBar from "./components/base/StatBar";
import { Route, Routes } from "react-router-dom";
import "./styles/base.css";
import Welcome from "./components/Welcome/Welcome";
import AuthForm from "./components/AuthForm/AuthForm";
import UserProvider from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <UserProvider>
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
