import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const GuestLayout = () => {
  const { user } = useAuthContext();
 
  return !user ? (
    <>
      <div className="max-w-7xl mt-10 mx-auto">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default GuestLayout;
