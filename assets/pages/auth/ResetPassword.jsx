import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import useAuthContext from "../../context/AuthContext";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [SearchParams] = useSearchParams();

  const { resetPass, errors, status } = useAuthContext();

 
  const { token } = useParams();
  useEffect(() => {
    setEmail(SearchParams.get("email")); 
    
  }, []);

    const resetHandle = async (event) => {
      event.preventDefault();
      resetPass(token, email, password, password_confirmation); 
    };
  return (
    <>
      <h1>Register</h1>

      <form action="" className="mt-10 bg-gray-100 p-3" onSubmit={resetHandle}>
        <h4>React</h4>
        <input
          type="text"
          name="password"
          placeholder="Password Confirmation"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        {errors.password &&
          errors.password.map((el, i) => {
            return (
              <p key={i} className="text-red-500">
                {el}
              </p>
            );
          })}
          {status && <p className="text-green-500">{status}</p>}
        <br />
          
        <button className="bg-indigo-900 text-white px-2 py-1 rounded-2xl">
          reset
        </button>
      </form>
    </>
  );
};
export default ResetPassword;
