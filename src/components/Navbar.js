import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center">
        <li className="py-2 px-2 md:px-20">
          <Link
            className="uppercase hover:cursor-pointer hover:bg-gray-400 py-2 px-3 rounded-sm"
            to="/"
          >
            home
          </Link>
        </li>
        <li className="py-2 px-2 md:px-20">
          <Link
            className="uppercase hover:cursor-pointer hover:bg-gray-400 py-2 px-3 rounded-sm"
            to="/store"
          >
            store
          </Link>
        </li>
        <li className="py-2 px-2 md:px-20">
          <Link
            className="uppercase hover:cursor-pointer hover:bg-gray-400 py-2 px-3 rounded-sm"
            to="/about"
          >
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}
