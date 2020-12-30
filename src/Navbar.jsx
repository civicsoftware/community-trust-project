/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar() {
  return (
    <div className="p-4 bg-gradient-to-l from-purple-600 to-purple-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between py-1 items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="text-xl">Community TRUST Project</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-gray-300 hover:text-white"
            >
              Compass
            </a>
            <a
              href="/avatars"
              className="text-base font-medium text-gray-300 hover:text-white"
            >
              Stakeholders
            </a>
          </nav>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-gray-300 hover:text-white"
            >
              Flower Of Hope
            </a>
            <a
              href="/library"
              className="text-base font-medium text-gray-300 hover:text-white"
            >
              Data Library
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
