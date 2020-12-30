/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../public/trust_logo_t.svg";

function Navbar() {
  return (
    <div className="p-4 text-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between py-1 items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex flex-row">
              <img src={Logo} className={"h-12 w-12"}/>
              <span className="text-xl self-center pl-6">Community Trust Project</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="/compass"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
            >
              Compass
            </a>
            <a
              href="/avatars"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
            >
              Stakeholders
            </a>
          </nav>
          <nav className="hidden md:flex space-x-10">
            <a
              href="/flower"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
            >
              Flower Of Hope
            </a>
            <a
              href="/library"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
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
