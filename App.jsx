import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import ScrollToTop from "./assets/Components/ScrollToTop";
import Home from "./assets/pages/Home/Home";
import Login from "./assets/pages/Auth/Login";
import Register from "./assets/pages/Auth/Register";
import ForgotPassword from "./assets/pages/Auth/ForgotPassword";
import { AuthProvider } from "./assets/context/AuthContext";
import AuthLayout from "./assets/layouts/AuthLayout";
import GuestLayout from "./assets/layouts/GuestLayout";
import ResetPassword from "./assets/pages/Auth/ResetPassword";
import IndexPoems from "./assets/pages/Poems/Index";
import ShowPoem from "./assets/pages/Poems/Show";
import AddPoem from "./assets/Components/AddPoem";
import AddPoemPage from "./assets/pages/Poems/AddPoemPage";
import { PoemProvider } from "./assets/context/PoemContext";
import Profile from "./assets/pages/Profile/Profile";
function App() {
  return (
    <>
      <section className="min-h-[calc(100vh-64px)]">
        <Router>
          <AuthProvider>
            <PoemProvider>
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/poems" exact element={<IndexPoems />} />
                <Route path="/poem/s/:slug" exact element={<ShowPoem />} />
                <Route path="/p/:username" exact element={<Profile />} />

                <Route element={<AuthLayout />}>
                  <Route path="/poem/create" element={<AddPoemPage />} />
                </Route>
                <Route element={<GuestLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register/:typeAccount" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route
                    path="/password-reset/:token"
                    element={<ResetPassword />}
                  />
                </Route>
              </Routes>
              <AddPoem />
            </PoemProvider>
          </AuthProvider>
        </Router>
      </section>

      <Footer />
    </>
  );
}

export default App;
