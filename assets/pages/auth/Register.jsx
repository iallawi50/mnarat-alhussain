import { useState } from "react";

import useAuthContext from "../../context/AuthContext"
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const { register, errors } = useAuthContext();
  const handleRegister = async (event) => {
    event.preventDefault();
    register(name, email, password, password_confirmation);
  };
  return (
    <>
      <h1>Register</h1>

      <form
        action=""
        className="mt-10 bg-gray-100 p-3"
        onSubmit={handleRegister}
      >
        <h4>React</h4>

        <input
          type="text"
          placeholder="Name"
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
        <br />
        <input
          type="text"
          placeholder="Email"
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
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password Confirmation"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-indigo-900 text-white px-2 py-1 rounded-2xl">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
