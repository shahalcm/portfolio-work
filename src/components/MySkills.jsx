import React from 'react';
import { FaGitAlt, FaSitemap, FaBolt } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiSqlite } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const MySkills = () => {
  const techs = [
    {
      id: 1,
      icon: <SiFlutter size={64} className="group-hover:text-[#02569B] transition-colors duration-500" />,
      title: "Flutter",
      shadow: "group-hover:shadow-[0_0_40px_rgba(2,86,155,0.4)]"
    },
    {
      id: 2,
      icon: <SiDart size={64} className="group-hover:text-[#00C4B3] transition-colors duration-500" />,
      title: "Dart",
      shadow: "group-hover:shadow-[0_0_40px_rgba(0,196,179,0.4)]"
    },
    {
      id: 3,
      icon: <SiFirebase size={64} className="group-hover:text-[#FFCA28] transition-colors duration-500" />,
      title: "Firebase",
      shadow: "group-hover:shadow-[0_0_40px_rgba(255,202,40,0.4)]"
    },
    {
      id: 4,
      icon: <FaSitemap size={64} className="group-hover:text-brand-500 transition-colors duration-500" />,
      title: "Provider",
      shadow: "group-hover:shadow-[0_0_40px_rgba(188,52,250,0.4)]"
    },
    {
      id: 5,
      icon: <FaBolt size={64} className="group-hover:text-cyberpink transition-colors duration-500" />,
      title: "GetX",
      shadow: "group-hover:shadow-[0_0_40px_rgba(255,0,127,0.4)]"
    },
    {
      id: 6,
      icon: <TbApi size={64} className="group-hover:text-accent transition-colors duration-500" />,
      title: "REST API",
      shadow: "group-hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
    },
    {
      id: 7,
      icon: <SiSqlite size={64} className="group-hover:text-[#38bdf8] transition-colors duration-500" />,
      title: "SQLite",
      shadow: "group-hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]"
    },
    {
      id: 8,
      icon: <FaGitAlt size={64} className="group-hover:text-[#f97316] transition-colors duration-500" />,
      title: "Git",
      shadow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
    }
  ];

  return (
    <div name="skills" className="w-full min-h-[80vh] bg-[#09090b] py-32 flex items-center relative overflow-hidden">
      
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full h-full text-zinc-300 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Technical Arsenal</p>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-zinc-100 tracking-tighter mb-6">
            Skills.
          </h2>
          <div className="h-1 w-16 bg-linear-to-r from-accent to-cyberpink rounded-full mx-auto md:mx-0 mb-8"></div>
          <p className="text-zinc-400 font-light text-lg leading-relaxed">
            Proficient in cross-platform mobile development, crafting fluid user interfaces, reactive state structures, and highly optimized database configurations.
          </p>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 perspective-container">
          {techs.map(({ id, icon, title, shadow }) => (
            <div
              key={id}
              className={`group card-premium rounded-3xl p-8 flex flex-col justify-center items-center cursor-crosshair border border-zinc-800/80 bg-zinc-900/50 hover:-translate-y-4 hover:bg-zinc-900 transition-all duration-500 ${shadow}`}
            >
              <div className="text-zinc-655 mb-6 drop-shadow-2xl opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                {icon}
              </div>
              <p className="text-lg font-bold text-zinc-400 group-hover:text-zinc-100 tracking-wide transition-colors duration-300">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MySkills;
