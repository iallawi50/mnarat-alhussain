import { useState } from "react"; 
import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, errors} = useAuthContext();
  const handleLogin = async (event) => {
    event.preventDefault();
    login(email, password)
  };
  return (
    <>
      <h1>Login</h1>

      <form action="" className="mt-10 bg-gray-100 p-3" onSubmit={handleLogin}>
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
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
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

        <button className="bg-indigo-900 text-white px-2 py-1 rounded-2xl">
          Login
        </button>
        <Link to="/register">sign up </Link> 
        <Link to="/forgot-password">forgot password</Link>
      </form>
    </>
  );
};

export default Login;
