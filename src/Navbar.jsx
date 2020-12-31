/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../public/trust_logo_t.svg";

function Navbar() {
  return (
    <div className="p-1 text-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between py-1 items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex flex-row">
              <img src={Logo} className="h-12 w-12" alt="Trust Project Logo" />
              <span className="text-xl self-center pl-4">
                Community TRUST Project
              </span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/blueprint"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
              activeClassName="text-teal-dark"
            >
              Blueprint
            </NavLink>
            <NavLink
              to="/library"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
              activeClassName="text-teal-dark"
            >
              Data Library
            </NavLink>
            <NavLink
              to="/compass"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
              activeClassName="text-teal-dark"
            >
              Compass
            </NavLink>
            <NavLink
              to="/avatars"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
              activeClassName="text-teal-dark"
            >
              Stakeholders
            </NavLink>
            <NavLink
              to="/flower"
              className="text-base font-medium text-gray-900 hover:text-gray-500"
              activeClassName="text-teal-dark"
            >
              Flower Of Hope
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
