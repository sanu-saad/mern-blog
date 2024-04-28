import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
          <p className="bg-red-600 w-1/2 mt-5 rounded p-1.5 text-white mx-auto">
            This is an error msg
          </p>
          <input
            type="text"
            placeholder="Full name"
            value={userData.name}
            onChange={handleChange}
            className="input mt-5"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
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
