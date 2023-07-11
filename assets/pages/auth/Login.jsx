import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useAuthContext();
  const handleLogin = async (event) => {
    event.preventDefault();
    login(email, password);
  };
  return (
    <>
      <h1 className="text-white text-center mb-10 text-3xl">تسجيل دخول</h1>

      <form action="" onSubmit={handleLogin}>
        <div className="grid grid-cols-1  gap-8 mx-3">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-lg mb-2">
              البريد الالكتروني :
            </label>
            <input
              id="email"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {errors.email &&
              errors.email.map((el, i) => {
                return (
                  <p key={i} className="text-red-500">
                    {el}
                  </p>
                );
              })}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-white text-lg mb-2">
              كلمة المرور :
            </label>
            <input
              id="password"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              type="text" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password &&
              errors.password.map((el, i) => {
                return (
                  <p key={i} className="text-red-500">
                    {el}
                  </p>
                );
              })}
          </div>
        </div>
        {/* Account Type */}
        <div className="flex flex-col sm:items-center mx-3 mt-10">
          <button className="btn-submit text-white px-2 sm:text-2xl sm:px-10 py-1 rounded-3xl mb-10	transition">
            تسجيل
          </button>
        </div>

        {/* <Link to="/register" className="register">لاتملك حساب ؟ سجل من هنا</Link> */}
        <Link to="/forgot-password" className="text-white text-center block underline">نسيت كلمة المرور</Link>
      </form>
    </>
  );
};

export default Login;
