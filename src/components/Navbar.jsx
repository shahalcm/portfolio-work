import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'service' },
    { id: 4, link: 'portfolio' },
    { id: 5, link: 'skills' },
    { id: 6, link: 'contact' },
  ];  

  return (
    <div className={`fixed w-full flex justify-center z-50 transition-all duration-305 ${scrolled ? 'top-4' : 'top-0'}`}>
      <nav className={`w-full max-w-7xl px-6 py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'floating-nav rounded-full mx-4 shadow-lg shadow-purple-900/10' : 'bg-transparent text-white'}`}>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-accent to-cyberpink hover:scale-105 transition-transform duration-300 cursor-pointer">
            Jasim .
          </h1>
        </div>

        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium text-sm text-zinc-400 hover:text-white transition-colors duration-300 relative group"
            >
              <Link to={link} smooth duration={700} offset={-80} className="px-2 py-1">
                {link === 'skills' ? 'My Skills' : link}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-linear-to-r from-accent to-cyberpink transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile menu trigger */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer text-zinc-300 md:hidden z-50">
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-40 transition-transform duration-500 flex flex-col justify-center items-center ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-8 text-center text-zinc-300">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize text-4xl font-semibold hover:text-white transition-colors">
              <Link onClick={() => setNav(false)} to={link} smooth duration={700} offset={-80}>
                {link === 'skills' ? 'My Skills' : link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
