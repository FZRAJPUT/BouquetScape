import React, { useState } from "react";
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from './logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link to={'/'} >
        <div className="h-[80px] w-[140px]">
          <img className="w-full h-full object-contain" src={logo} alt="logo" />
        </div>
        </Link>

        {/* Search + Phone (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {/* Phone */}
          <div className="flex justify-center items-center gap-2 text-gray-700">
            <FiMail className="text-lg" />
            <a href="mailto:examole@gmail.com" className="mb-1">examole@gmail.com</a>
          </div>

          {/* Search */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search here..."
              className="w-[80%] border border-gray-400 outline-0 focus:border-pink-400 rounded-full py-1 px-4 pl-6 pr-10 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Cart + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative flex items-center gap-2 cursor-pointer transition-transform">
            <FiShoppingBag className="text-2xl" />
            {/* <span className="absolute -top-2 -left-2 bg-pink-500 text-white text-xs rounded-full px-1.5">
              2
            </span> */}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Navbar (Desktop) */}
      <nav className="hidden md:flex text-xs justify-center gap-10 py-3 text-gray-600 ">
        {["home", "cart", "profile", "about", "contact"].map(
          (item) => (
            <Link
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              className="hover:text-pink-400 transition-colors"
            >
              {item.toUpperCase()}
            </Link>
          )
        )}
      </nav>

      {/* Mobile Menu (Slide Down Animation) */}
      <div
        className={`md:hidden bg-white shadow-inner overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
          {["home", "cart", "profile", "about", "contact"].map(
          (item) => (
            <Link
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              className="hover:text-pink-400 transition-colors"
            >
              {item.toUpperCase()}
            </Link>
          )
        )}

          {/* Search on mobile */}
          <div className="relative w-10/12">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full border rounded-full py-2 px-4 pl-6 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
