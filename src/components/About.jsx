import React from "react";
import { FaMobileAlt, FaBolt, FaDatabase } from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const pillars = [
    {
      icon: <FaBolt className="text-accent" size={20} />,
      title: "Performance First",
      desc: "Fast startup speeds, 60fps animations, and lightweight data usage configurations."
    },
    {
      icon: <FaMobileAlt className="text-cyberpink" size={20} />,
      title: "Reactive State",
      desc: "Robust state management structures using Riverpod, Provider, and GetX for scale."
    },
    {
      icon: <FaDatabase className="text-brand-500" size={20} />,
      title: "Offline Sync",
      desc: "Seamless local databases using SQLite and secure caching pipelines via Firebase."
    }
  ];

  return (
    <div
      name="about"
      className="relative w-full min-h-screen bg-zinc-950 text-zinc-300 py-32 flex items-center"
    >
      <div className="max-w-7xl px-6 mx-auto flex flex-col justify-center w-full h-full z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-left">
          <p className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-accent via-brand-500 to-cyberpink uppercase mb-2">
            Inside the creative mind
          </p>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-zinc-100 tracking-tighter">
            About Me.
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-accent to-transparent mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start text-left">
          
          {/* Left Column: Vision & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <h3 className="text-3xl sm:text-5xl font-bold leading-tight mb-8">
                I'm an App Developer <br /> driven by
                Innovation &<br />{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-brand-500 to-cyberpink italic">Creativity.</span>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                I combine technical precision with creative problem-solving to build applications that are both visually compelling and functionally robust.
              </p>
            </div>

            {/* Stats board */}
            <div className="grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{stat.number}</span>
                  <span className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio & Pillars */}
          <div className="lg:col-span-7 space-y-10 text-lg font-light leading-relaxed">
            
            {/* Bio Card */}
            <div className="p-8 card-premium rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-3xl rounded-full transition-transform duration-700 group-hover:scale-150"></div>

              <p className="relative z-10 mb-6 text-zinc-300 leading-relaxed font-light">
                Welcome to my portfolio! I am{" "}
                <strong className="text-zinc-100 font-semibold inline">
                  Muhammed Jasim
                </strong>
                , a Flutter Developer passionate about crafting modern, scalable, and immersive mobile applications that deliver seamless user experiences across platforms.
              </p>

              <p className="relative z-10 text-zinc-300 leading-relaxed font-light">
                From building responsive interfaces to developing powerful backend integrations, my projects reflect a strong commitment to quality, performance, and user-centric design. Every application I create is driven by clean architecture, intuitive interactions, and attention to detail.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl flex flex-col gap-4 hover:border-zinc-700 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-zinc-100 text-base font-semibold mb-1">{pillar.title}</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
