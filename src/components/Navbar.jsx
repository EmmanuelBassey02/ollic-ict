import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Courses', path: '/courses' },
  ];

  return (
    <div className="bg-[#fff] z-50  shadow sticky top-0 px-6 flex justify-between items-center md:h-20 h-16 text-blue-900">
      {/* Logo */}
      <div className="">
        <Link to="/">
          <img src={logo} alt="Ollic Logo" className="md:h-10 h-6" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 px-4 hover:text-orange-600 font-[500] hover:border-b-2 hover:border-orange-600  m-2 cursor-pointer duration-100 text-lg"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
        <button
          className="bg-teal-700 mt-2 hover:bg-teal-800 xl:ml-16 h-10 w-28 px-4 py-2 text-white font-medium rounded-md transition duration-300"
        >
          Register
        </button>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer" aria-label="Toggle Navigation">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed md:hidden left-0 top-0 w-3/5 h-full border-r border-orange-900  backdrop-blur-lg bg-white/10 duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Logo */}
        <div className="w-24 pl-4 pt-8">
          <Link to="/" onClick={closeNav}>
            <img src={logo} alt="Website Logo" className="h-6" />
          </Link>
        </div>
        <br />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={item.path} key={item.id} onClick={closeNav}>
            <li className="p-4 border-b border-neutral-700 hover:bg-teal-800 duration-300 font-medium hover:text-white cursor-pointer">
              {item.text}
            </li>
          </Link>
        ))}
        <li className="p-4 pt-5">
          <button className="bg-teal-700 hover:bg-teal-800  font-medium h-10 px-4 py-2 text-white rounded-md transition duration-300">
            Register
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
