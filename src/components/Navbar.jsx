import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">EZ Labs</h1>
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li>
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
      <button className="md:hidden text-2xl">☰</button>
    </nav>
  );
}
