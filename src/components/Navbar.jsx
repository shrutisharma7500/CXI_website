import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/about', name: 'About' },
    { path: '/blogs', name: 'Blogs' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          <span className="text-orange-500">CXI</span>
          {/* <img src={logo} />       */}
           </a>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>

        <ul className={`hidden md:flex gap-8 text-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
          {navItems.map(({ path, name }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/login" className="bg-orange-500 hover:bg-orange-700 text-white font-semibold px-4 py-2 rounded" onClick={() => setIsMenuOpen(false)}>
              Log in
            </Link>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 text-lg bg-white text-black fixed top-0 left-0 w-full h-full pt-20 px-4">
          {navItems.map(({ path, name }) => (
            <li key={path}>
              <NavLink to={path} onClick={toggleMenu}>
                {name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/login" onClick={toggleMenu}>
              Log in
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
