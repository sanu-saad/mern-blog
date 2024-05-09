import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  
  return (
    <section className="text-center mt-5">
      <div>
        <h2 className="text-xl font-bold">Sign Up -</h2>
        {error && (
          <p className="bg-red-600 w-1/2 mt-5 rounded p-1.5 text-white mx-auto">
            {error}
          </p>
        )}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="input mt-5"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={handleChange}
            className="input"
          />
          <button className="btn">Sign Up</button>
        </form>
        <small>
          Already have an account ? <Link to="/login">sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
