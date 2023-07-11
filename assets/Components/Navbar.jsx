import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
const Navbar = () => {
  const { user, getUser, logout } = useAuthContext();
  useEffect(() => {
    if (!user) {
      getUser();
    }
  });
  return (
    <>
      <nav className="bg-[#315940] p-5 text-white">
        <div className="flex flex-row justify-between">
          <h3>منارات الحسين</h3>
          <ul className="flex">
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link to="/login" className="mr-5">
                    تسجيل دخول
                  </Link>
                </li>
                {/* <li>
                  <Link to="/register">انشاء حساب</Link>
                </li> */}
              </>
            ) : (
              <li className="mr-5" onClick={logout}>
                <button>تسجيل خروج</button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
