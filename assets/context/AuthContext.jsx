import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState("");
  const [status, setStatus] = useState("");
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const csrf = () => axios.get("/sanctum/csrf-cookie");
  useEffect(() => {
    setErrors("");
  }, [location]);
  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    console.log(data);
    setUser(data);
  };

  const login = async (email, password) => {
    try {
      await csrf();
      const res = await axios.post("/login", { email, password });
      
      getUser();
      navigate("/");
    } catch (e) {
      if (e.response.status == 422) setErrors(e.response.data.errors);
    }
  };
  const register = async (
    name,
    username,
    email,
    mobile,
    type,
    password,
    password_confirmation
  ) => {
    try {
      await csrf();
      await axios.post("/register", {
        name,
        username,
        email,
        mobile,
        type,
        password,
        password_confirmation,
      });
      getUser();
      navigate("/");
    } catch (e) {
      if (e.response.status == 422) setErrors(e.response.data.errors);
    }
  };

  const logout = async () => {
    await axios.post("/logout");
    setStatus(null);
    setUser(null);
  };

  const forgotPass = async (email) => {
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
      const response = await axios.post("/forgot-password", { email });
      setStatus(response.data.status);
    } catch (e) {
      if (e.response.status == 422) {
        setErrors(e.response.data.errors);
        setStatus(status);
      }
    }
  };

  const resetPass = async (token, email, password, password_confirmation) => {
    await csrf();
    setErrors([]);
    setStatus();
    try {
      const response = await axios.post("/reset-password", {
        token,
        email,
        password,
        password_confirmation,
      });
      setStatus(response.data.status);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (e) {
      if (e.response.status == 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const getProfile = async (username) => {
    try {
      const res = await axios.get(`api/profile/${username}`);
      setProfile(res.data);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        errors,
        status,
        getUser,
        login,
        register,
        logout,
        forgotPass,
        resetPass,
        getProfile,
        profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}
