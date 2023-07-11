import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/Auth.css";
import useAuthContext from "../../context/AuthContext";
const Register = () => {
  // ##################################################################
  // Start States
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); 
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { typeAccount } = useParams();
  const type = typeAccount == "poet" ? 1 : 0;
  const { register, errors } = useAuthContext();
  const handleRegister = async (event) => {
    event.preventDefault();
    register(name, username, email, mobile, type, password, password_confirmation); 

  };

      useEffect(() => {
        console.log(errors);
      }, [errors]);

  // ##################################################################

  return (
    <>
      <h1 className="text-white text-center mb-1 text-3xl">فتح حساب جديد</h1>
      <h3 className="text-gray-200 text-center mb-10 text-2xl">
        {typeAccount == "poet" ? "لـ شاعر" : "لـ رادود"}
      </h3>

      <form onSubmit={handleRegister}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-3">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white text-lg mb-2">
              الاسم :
            </label>
            <input
              id="name"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name &&
              errors.name.map((el, i) => {
                return (
                  <p key={i} className="text-red-500">
                    {el}
                  </p>
                );
              })}
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-white text-lg mb-2">
              اسم المستخدم :
            </label>
            <input
              id="username"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              type="text"
              placeholder="@اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username &&
              errors.username.map((el, i) => {
                return (
                  <p key={i} className="text-red-500">
                    {el}
                  </p>
                );
              })}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-lg mb-2">
              البريد الالكتروني :
            </label>
            <input
              id="email"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              type="text"
              placeholder="البريد الالكتروني"
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

          {/* Mobile */}
          <div className="flex flex-col">
            <label htmlFor="mobile" className="text-white text-lg mb-2">
              رقم الجوال :
            </label>
            <input
              id="mobile"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              type="text"
              placeholder="رقم الجوال"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile &&
              errors.mobile.map((el, i) => {
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
              placeholder="كلمة المرور"
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

          {/* Password Confirmation */}
          <div className="flex flex-col">
            <label
              htmlFor="password_confirmation"
              className="text-white text-lg mb-2"
            >
              تأكيد كلمة المرور :
            </label>
            <input
              id="password_confirmation"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              name="password"
              placeholder="تأكيد كلمة المرور"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </div>
        {/* Account Type */}
        <div className="flex flex-col sm:items-center  mx-3 my-10  ">
          <button className="btn-submit text-white px-2 sm:text-2xl sm:px-10 py-1 rounded-3xl mb-10	transition">
            تسجيل
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
