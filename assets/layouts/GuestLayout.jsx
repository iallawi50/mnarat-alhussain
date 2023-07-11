import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const GuestLayout = () => {
  const { user } = useAuthContext();
 
  return !user ? (
    <>
      <div className="max-w-7xl mx-auto pt-14  min-h-[calc(100vh-128px)]">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default GuestLayout;
