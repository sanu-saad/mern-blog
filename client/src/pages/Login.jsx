import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <section className="text-center mt-5">
      <div>
        <h2 className="text-xl font-bold">Sign Up -</h2>
        <form>
          <p className="bg-red-600 w-1/2 mt-5 mb-5 rounded p-1.5 text-white mx-auto">
            This is an error msg
          </p>

          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            className="input"
          />

          <button className="btn">Sign In</button>
        </form>
        <small>
          Don't have an account ? <Link to="/register">sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
