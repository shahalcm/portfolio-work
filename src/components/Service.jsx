import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaRocket } from 'react-icons/fa';

const Service = () => {
  const services = [
    {
      id: 1,
      name: "App Development",
      tagline: "iOS & Android Solutions",
      description: "Building high-performance, scalable, and visually engaging mobile applications tailored to deliver rich native experiences.",
      icon: <FaLaptopCode size={36} className="text-accent" />,
      color: "from-accent/10 to-transparent",
      tagColor: "text-accent",
      accentBorder: "group-hover:via-accent"
    },
    {
      id: 2,
      name: "UI/UX Design",
      tagline: "High-Fidelity Interaction",
      description: "Designing modern, intuitive, and user-focused mobile interfaces that reduce friction and enhance user satisfaction.",
      icon: <FaPaintBrush size={36} className="text-cyberpink" />,
      color: "from-cyberpink/10 to-transparent",
      tagColor: "text-cyberpink",
      accentBorder: "group-hover:via-cyberpink"
    },
    {
      id: 3,
      name: "App Optimization",
      tagline: "Performance & Scaling",
      description: "Analyzing render trees, optimizing memory footprint, and streamlining database calls to create lag-free user experiences.",
      icon: <FaRocket size={36} className="text-brand-500" />,
      color: "from-brand-500/10 to-transparent",
      tagColor: "text-brand-500",
      accentBorder: "group-hover:via-brand-500"
    }
  ];

  return (
    <div name="service" className="w-full min-h-screen bg-[#09090b] text-zinc-300 py-32 flex items-center relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-brand-500/5 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl px-6 mx-auto w-full h-full z-10 flex flex-col justify-center">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <p className="text-sm font-bold tracking-widest text-accent uppercase mb-2">My Expertise</p>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-zinc-100 tracking-tighter mb-4">
            Services.
          </h2>
          <div className="h-1 w-16 bg-linear-to-r from-accent to-cyberpink rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map(({ id, name, tagline, description, icon, color, tagColor, accentBorder }) => (
            <div
              key={id}
              className="card-premium rounded-3xl p-8 sm:p-10 flex flex-col items-start relative group overflow-hidden cursor-pointer"
            >
              {/* Backglow layer */}
              <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-750`}></div>
              
              {/* Floating icon */}
              <div className="relative z-10 p-4 bg-zinc-950/80 rounded-2xl mb-8 border border-zinc-800/80 shadow-xl group-hover:scale-110 group-hover:border-zinc-700 transition-all duration-500">
                {icon}
              </div>
              
              {/* Tagline */}
              <span className={`relative z-10 text-xs font-semibold tracking-wider ${tagColor} uppercase mb-3`}>
                {tagline}
              </span>
              
              {/* Title */}
              <h3 className="relative z-10 text-2xl sm:text-3xl font-bold mb-4 text-zinc-100 tracking-tight transition-all duration-300">
                {name}
              </h3>
              
              {/* Description */}
              <p className="relative z-10 text-zinc-400 text-base leading-relaxed font-light grow">
                {description}
              </p>

              {/* Glowing bottom line */}
              <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-transparent to-transparent ${accentBorder} transition-all duration-700`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
