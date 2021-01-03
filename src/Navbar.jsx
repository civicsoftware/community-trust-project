/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
import Logo from "../public/trust_logo_t.svg";

function MobileDropdown() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  function toggleDropdown() {
    if (!isNavOpen) {
      setIsNavOpen(!isNavOpen);
    }
  }

  // Conditional button with and without onClick is a hokey trick to prevent double onClose onClick event propogation bug in Windmill.Dropdown 0.50

  return (
    <div className="md:hidden">
      {!isNavOpen && (
        <Windmill.Button
          onClick={() => {
            toggleDropdown();
            setIsDisabled(true);
          }}
          aria-label="Navigation"
          aria-haspopup="true"
          disabled={isDisabled}
        >
          <svg
            className="h-6 w-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Windmill.Button>
      )}
      {isNavOpen && (
        <Windmill.Button aria-label="Navigation" aria-haspopup="true">
          <svg
            className="h-6 w-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Windmill.Button>
      )}
      <Windmill.Dropdown
        align="right"
        isOpen={isNavOpen}
        onClose={() => {
          setIsNavOpen(false);
          setIsDisabled(false);
        }}
      >
        <Windmill.DropdownItem
          tag="a"
          href="/blueprint"
          className="text-base font-medium text-gray-900 hover:text-gray-500"
        >
          Blueprint
        </Windmill.DropdownItem>
        <Windmill.DropdownItem
          tag="a"
          href="/library"
          className="text-base font-medium text-gray-900 hover:text-gray-500"
        >
          Data Library
        </Windmill.DropdownItem>
        <Windmill.DropdownItem
          tag="a"
          href="/compass"
          className="text-base font-medium text-gray-900 hover:text-gray-500"
        >
          Compass
        </Windmill.DropdownItem>
        <Windmill.DropdownItem
          tag="a"
          href="/avatars"
          className="text-base font-medium text-gray-900 hover:text-gray-500"
        >
          Stakeholders
        </Windmill.DropdownItem>
        <Windmill.DropdownItem
          tag="a"
          href="/flower"
          className="text-base font-medium text-gray-900 hover:text-gray-500"
        >
          Flower Of Hope
        </Windmill.DropdownItem>
      </Windmill.Dropdown>
    </div>
  );
}

function Navbar() {
  return (
    <div className="p-2 text-gray-900 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="flex justify-between py-1 items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex flex-row">
              <img src={Logo} className="h-8 w-8" alt="Trust Project Logo" />
              <span className="text-xl self-center pl-3">
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
          <MobileDropdown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
