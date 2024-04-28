import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className=" sticky top-0 h-12 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <div className="h-12 w-full container flex items-center justify-between">
        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold">BLOG.</h2>
          </Link>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="/profile">Ernest Achiever</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
