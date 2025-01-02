// Navbar Component with Proper Alignment and Full Visibility (Navbar.jsx)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white relative h-10 p-2 md:p-0">
      <div className=" container mx-auto flex justify-between md:items-center z-10">
        <h1 className="text-xl font-bold flex-shrink-0 leading-none z-10">Minale + Mann</h1>
        <button
          className="md:hidden text-white focus:outline-none absolute top-2 right-2 z-30"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul
          className={`md:flex md:items-center md:space-x-6 md:static w-full md:w-auto bg-primary md:bg-transparent transition-transform transform shadow-lg md:shadow-none z-20 ${
            isOpen ? 'translate-y-0 ' : '-translate-y-full'} md:translate-y-0 md:transition-none`}
        >
          <li>
            <Link to="/" className="block py-2 px-4 text-center md:text-left" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="block py-2 px-4 text-center md:text-left" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 px-4 text-center md:text-left" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 px-4 text-center md:text-left" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;