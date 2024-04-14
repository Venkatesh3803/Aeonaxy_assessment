import { useContext } from "react";
import "./App.css"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import DesignerOption from "./pages/DesignerOption";


function App() {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <Routes>

        <Route path="/" element={!currentUser ? <Navigate to={"/signUp"} /> : <HomePage />} />
        <Route path="/welcome/:id" element={<WelcomePage />} />
        <Route path="/designoption" element={<DesignerOption />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
