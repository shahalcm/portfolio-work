import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="relative w-full min-h-screen flex items-center bg-zinc-950 overflow-hidden"
    >
      {/* Background blobs for premium feel */}
      <div className="blob bg-brand-500/20 w-160 h-160 -top-32 -left-32 animate-pulse-slow"></div>
      <div className="blob bg-accent/15 w-140 h-140 top-1/2 right-0 transform -translate-y-1/2 animate-pulse-slow delay-3000"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 pt-24 md:pt-0 z-10 gap-10 md:gap-0">
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full w-full md:w-[55%] pb-12 md:pb-0 text-left">
          <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm sm:text-base">
            Welcome to my universe
          </p>
          <h2 className="text-5xl sm:text-7xl font-extrabold text-zinc-100 mb-6 leading-[1.1] tracking-tighter">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-brand-500 to-cyberpink">
              Muhammed Jasim
            </span>
          </h2>
          <h3 className="text-2xl sm:text-3xl text-zinc-400 font-light mb-8 pt-2 border-t border-zinc-800 w-fit">
            Next-Gen App Developer
          </h3>
          <p className="text-zinc-450 py-2 max-w-lg text-lg sm:text-xl leading-relaxed font-light mb-10">
            I craft immersive mobile experiences where elegant design meets
            powerful performance. Let’s shape the future of apps together.
          </p>
          <div className="flex space-x-6 pl-2 mt-2">
            {[
              {
                i: <FaGithub size={26} />,
                color: "hover:text-zinc-100",
                href: "https://github.com/jasim1t",
              },
              {
                i: <FaLinkedin size={26} />,
                color: "hover:text-sky-400",
                href: "https://www.linkedin.com",
              },
              {
                i: <FaInstagram size={26} />,
                color: "hover:text-pink-500",
                href: "https://instagram.com",
              },
              {
                i: <FaWhatsapp size={26} />,
                color: "hover:text-emerald-400",
                href: "https://wa.me",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                className={`text-zinc-500 transition-all duration-300 hover:-translate-y-2 ${social.color} cursor-pointer`}
              >
                {social.i}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-start gap-8 mt-10">
            <a
              href="/Muhammed Shahal Cm- Full Stack Resume (1).pdf"
              download="Muhammed Jasim - Resume.pdf"
              className="relative inline-flex group"
            >
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-linear-to-r from-accent via-brand-500 to-cyberpink rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-zinc-900 border border-transparent rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 hover:scale-[1.02] cursor-pointer">
                Download My CV
              </button>
            </a>
          </div>
        </div>

        {/* Right Content: Premium Interactive Mockup */}
        <div className="flex items-center justify-center w-full md:w-[40%] relative h-[500px]">
          {/* Outer Ambient Glow */}
          <div className="absolute w-72 h-72 bg-brand-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute w-60 h-60 bg-accent/5 blur-3xl rounded-full animate-pulse-slow delay-2000"></div>

          {/* Floating Phone Canvas */}
          <div className="relative w-64 h-[460px] bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-[3rem] p-4 shadow-2xl flex flex-col justify-between overflow-hidden animate-float-slow group/mockup">
            
            {/* Screen Reflect Line */}
            <div className="absolute top-0 -left-full w-[50%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover/mockup:left-[200%] transition-all duration-1500 ease-in-out"></div>
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 pt-1 text-[10px] text-zinc-500 font-mono">
              <span>09:41</span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full border border-zinc-850 flex items-center justify-center text-[6px]">📶</span>
                <span className="w-4 h-2 rounded-sm border border-zinc-850 flex items-center justify-center text-[6px]">🔋</span>
              </div>
            </div>

            {/* Simulated App Interface */}
            <div className="flex-1 my-4 bg-zinc-950/80 rounded-4xl border border-zinc-800/60 p-4 flex flex-col gap-4 overflow-hidden relative">
              {/* Flutter App Banner */}
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg bg-[#02569B] flex items-center justify-center text-[10px] text-white font-bold">F</div>
                  <span className="text-[10px] font-bold text-zinc-400">jasim_dev_app</span>
                </div>
                <span className="text-[8px] bg-emerald-500/10 text-emerald-400 font-semibold px-2 py-0.5 rounded-full">Active</span>
              </div>

              {/* Code/Widget Simulation */}
              <div className="flex-1 font-mono text-[9px] text-zinc-400 leading-relaxed overflow-hidden text-left">
                <p className="text-accent">import <span className="text-cyberpink">'flutter.dart';</span></p>
                <p className="text-accent">import <span className="text-cyberpink">'riverpod.dart';</span></p>
                <p className="text-zinc-655 mt-2">// Core Architecture</p>
                <p className="text-brand-500">class <span className="text-zinc-200">JasimPortfolio</span> extends <span className="text-accent">ConsumerWidget</span> &#123;</p>
                <p className="pl-2 text-zinc-500">@override</p>
                <p className="pl-2 text-accent">Widget <span className="text-zinc-200">build</span>(BuildContext context) &#123;</p>
                <p className="pl-4 text-brand-500">return <span className="text-accent">MaterialApp</span>(</p>
                <p className="pl-6 text-zinc-300">theme: <span className="text-accent">ThemeData.dark</span>(),</p>
                <p className="pl-6 text-zinc-300">home: <span className="text-accent">BeautifulPortfolio</span>(),</p>
                <p className="pl-4">);</p>
                <p className="pl-2">&#125;</p>
                <p>&#125;</p>
              </div>

              {/* Mobile Dock Indicator */}
              <div className="h-1 w-20 bg-zinc-800 rounded-full mx-auto mt-auto"></div>
            </div>

            {/* Speaker & Camera Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-950 rounded-full flex items-center justify-end px-3 gap-1">
              <div className="w-10 h-1 bg-zinc-800 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-white cursor-pointer transition-colors duration-300">
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
