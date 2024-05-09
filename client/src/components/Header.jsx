import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <nav className=" sticky top-0 h-12 w-full bg-[#764ABC]">
      <div className="h-12 w-full container flex items-center justify-between">
        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold">BLOG.</h2>
          </Link>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">All Post</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
