import React from "react";

function NavBar() {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-3 items-center bg-teal-500 p-6">
      <div className="flex items-center text-white justify-center md:justify-start">
        <span className="font-semibold text-2xl tracking-tight">
          Jaime Lopez
        </span>
      </div>
      <div className="flex justify-center mt-4 md:mt-0">
        <div className="text-lg">
          <a
            href="#responsive-header"
            className="md:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="md:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#responsive-header"
            className="md:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="md:hidden flex justify-center md:justify-end mt-4 md:mt-0">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
