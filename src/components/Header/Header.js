import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-black flex text-white justify-between p-4">
      <h2 className="text-white">
        <Link to="/">Pasonic</Link>
      </h2>
      <ul className="flex gap-4">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
