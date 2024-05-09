import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <section className="text-center mt-5">
      <div>
        <h2 className="text-xl font-bold">Sign Up -</h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <p className="bg-red-500 w-1/2 mt-5 mb-5 rounded p-1.5 text-white mx-auto">
              {error}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
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
