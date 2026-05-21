import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiMail, FiArrowUp, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-[#070708] text-zinc-500 py-16 border-t border-zinc-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-brand-500/5 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl px-6 mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-accent via-brand-500 to-cyberpink tracking-tighter mb-4">
              Jasim .
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed mb-6 max-w-xs font-light">
              Crafting premium mobile experiences. Fusing elegant user interfaces with responsive, clean, and rock-solid engineering.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/jasim1t" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-850 hover:border-zinc-700 rounded-xl transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-850 hover:border-zinc-700 rounded-xl transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <a 
                href="mailto:jasim.mohammed.dev@gmail.com" 
                className="p-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-850 hover:border-zinc-700 rounded-xl transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-zinc-300 font-bold tracking-wider text-xs uppercase mb-4">
              Explore
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[
                { name: 'Home', target: 'home' },
                { name: 'About', target: 'about' },
                { name: 'Services', target: 'service' },
                { name: 'Portfolio', target: 'portfolio' },
                { name: 'Skills', target: 'skills' },
                { name: 'Contact', target: 'contact' },
              ].map(({ name, target }) => (
                <li key={name}>
                  <Link 
                    to={target} 
                    smooth 
                    duration={700} 
                    offset={-80}
                    className="text-zinc-400 hover:text-accent text-sm font-light transition-colors duration-300 cursor-pointer flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-accent/80 rounded-full transition-colors"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Details / Focus */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-zinc-300 font-bold tracking-wider text-xs uppercase mb-4">
              Focus Areas
            </h3>
            <p className="text-zinc-450 text-sm leading-relaxed font-light mb-2">
              • Flutter Cross-Platform Development<br/>
              • Riverpod & Bloc State Management<br/>
              • Reactive Cloud Architectures (Firebase)
            </p>
            <p className="text-zinc-500 text-xs italic mt-2">
              Based in Kerala, India — available worldwide.
            </p>
          </div>

        </div>

        {/* Divider line with gradient highlight */}
        <div className="relative w-full h-px bg-zinc-900 mb-8">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent/25 to-transparent"></div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-xs text-zinc-500 text-center sm:text-left tracking-wider">
            &copy; {new Date().getFullYear()} Muhammed Jasim. All Rights Reserved.
          </div>
          
          {/* Scroll to Top */}
          <Link 
            to="home" 
            smooth 
            duration={800} 
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-white cursor-pointer group bg-zinc-900/60 hover:bg-zinc-800/80 px-4 py-2 rounded-xl border border-zinc-850 hover:border-zinc-700 transition-all duration-300"
          >
            Back to Top 
            <FiArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
