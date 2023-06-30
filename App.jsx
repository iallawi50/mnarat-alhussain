import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import ScrollToTop from "./assets/Components/ScrollToTop";
import Home from "./assets/pages/Home/Home";
import Login from "./assets/pages/auth/Login";
import Register from "./assets/pages/auth/Register";
import ForgotPassword from "./assets/pages/auth/ForgotPassword";
import { AuthProvider } from "./assets/context/AuthContext";
import AuthLayout from "./assets/layouts/AuthLayout";
import GuestLayout from "./assets/layouts/GuestLayout";
import ResetPassword from "./assets/pages/auth/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <ScrollToTop/>
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route element={<AuthLayout />}>
            </Route>
            <Route element={<GuestLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/password-reset/:token"
                element={<ResetPassword />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>

      <Footer/>
    </>
  );
}

export default App;
