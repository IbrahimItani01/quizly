import SideNav from "./components/base/SideNav";
import StatBar from "./components/base/StatBar";
import { Route, Routes } from "react-router-dom";
import "./styles/base.css";
import Welcome from "./components/Welcome/Welcome";
import AuthForm from "./components/AuthForm/AuthForm";
import UserProvider from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QuizProvider } from "./context/QuizContext";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      navigate("/panel");
    } else {
      navigate("/");
    }
  }, [navigate]);

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
              {/* Protected Route */}
              <Route
                path="/panel"
                element={
                  <ProtectedRoute>
                    {/* TODO: Panel Component or Dashboard */}
                    <div>Welcome to the Panel!</div>
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
