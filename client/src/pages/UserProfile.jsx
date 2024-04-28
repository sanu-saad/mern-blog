import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
const UserProfile = () => {
  // const [avatar, setAvatar] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <section className="text-center mt-5">
      <div>
        <Link to="/mypost/fdfdfd">
          <p className="text-sm mb-5 bg-blue-300 p-0.5 rounded mx-auto w-20">
            My Posts
          </p>
        </Link>

        <div className="relative flex items-center justify-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-20 h-20  rounded-full  border-4 border-red-200"
            />
            {/* form to update avatar */}
            <span className="absolute top-12 left-16">
              <form>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="jpg,jpeg,png"
                  // onChange={(e) => setAvatar(e.target.file)}
                  className="hidden"
                />
                <label htmlFor="avatar">
                  <FaEdit className="cursor-pointer" />
                </label>
              </form>
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-2">Peter Farnandish</h2>

        {/* form to update details */}
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
            placeholder="Current Password"
            value={userData.currentPassword}
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            placeholder="New Password"
            value={userData.newPassword}
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={userData.confirmNewPassword}
            onChange={handleChange}
            className="input"
          />
          <button className="btn">Update my details</button>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;
