import { useState } from "react";
import useAuthContext from "../../context/AuthContext";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPass, errors, status } = useAuthContext();
  const handleForgotPassword = async (event) => {
    event.preventDefault();
    forgotPass(email);
  };
  return (
    <>
      <h1>Login</h1>

      <form
        action=""
        className="mt-10 bg-gray-100 p-3"
        onSubmit={handleForgotPassword}
      >
        <h4>React</h4>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        {errors.email &&
          errors.email.map((el, i) => {
            return (
              <p key={i} className="text-red-500">
                {el}
              </p>
            );
          })}

        {status && <p className="text-green-500">{status}</p>}

        <button className="bg-indigo-900 text-white px-2 py-1 rounded-2xl">
          reset
        </button>
      </form>
    </>
  );
};

export default ForgotPassword;
