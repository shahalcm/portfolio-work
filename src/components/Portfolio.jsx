import React, { useState } from 'react';
import { FaGithub, FaCalendarAlt, FaUsers, FaCheckCircle, FaTasks, FaCode } from 'react-icons/fa';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Team Task Manager",
      subtitle: "Real-time Collaboration Tool",
      date: "Jan 2025 – Mar 2025",
      team: "App Developer (1), Designer (1)",
      techStack: ["Flutter", "Riverpod", "Firebase", "Firestore", "Auth", "Storage", "Git"],
      responsibilities: [
        {
          title: "Cross-Platform Development",
          desc: "Built a lightweight task management application enabling teams to collaborate on shared goals in real-time."
        },
        {
          title: "Real-time Synchronization",
          desc: "Utilized Firebase Firestore snapshots to ensure task status changes, comments, and assignments reflect instantly across all team members' devices."
        },
        {
          title: "State Management",
          desc: "Employed Riverpod to manage complex UI states, such as task filtering by category, priority, and due dates."
        },
        {
          title: "Secure Authentication",
          desc: "Implemented Firebase Auth for team onboarding, ensuring private workspace access and secure data handling."
        },
        {
          title: "File Sharing Integration",
          desc: "Integrated Firebase Storage to allow users to attach relevant documents and images directly to specific task cards."
        },
        {
          title: "Push Notifications",
          desc: "Configured Firebase Cloud Messaging (FCM) to alert users when they are tagged in a task or when a deadline is approaching."
        }
      ],
      achievements: [
        {
          title: "Seamless Collaboration",
          desc: "Successfully reduced 'update lag' within small teams by providing a centralized dashboard for daily operations."
        },
        {
          title: "Optimized Data Usage",
          desc: "Designed efficient Firestore queries and local caching to ensure the app remains responsive and cost-effective under frequent updates."
        },
        {
          title: "User-Centric Design",
          desc: "Developed a 'My Tasks' view that filters global team data into a personalized to-do list, improving individual focus."
        }
      ],
      image: "/task_manager.png",
      code: "https://github.com/jasim1t/team-task-manager"
    },
    {
      id: 2,
      title: "CRM Ticket Manager",
      subtitle: "Ticket Management System Development",
      date: "Apr 2025 – Dec 2025",
      team: "App Developer (1), Backend Developer (1), Designer (1)",
      techStack: ["Flutter", "Riverpod", "Firebase", "Firestore", "Auth", "Sentry", "Git"],
      responsibilities: [
        {
          title: "Lead Frontend Development",
          desc: "Managed the full development lifecycle of a mobile CRM focused on a corporate ticket-raising workflow."
        },
        {
          title: "Riverpod Architecture",
          desc: "Implemented a scalable app structure using Riverpod for efficient state management and reactive UI updates."
        },
        {
          title: "Firebase Integration",
          desc: "Developed the backend integration using Cloud Firestore for real-time ticket updates and Firebase Authentication for secure user access."
        },
        {
          title: "Ticket Lifecycle",
          desc: "Developed core logic for ticket creation, priority levels, real-time status tracking (Open/In-Progress/Resolved), and filtering."
        },
        {
          title: "Role-Based Security",
          desc: "Leveraged Firebase security rules to ensure sensitive internal company data is restricted based on user roles."
        },
        {
          title: "Stability & Monitoring",
          desc: "Integrated Sentry for real-time crash reporting and proactive issue tracking to maintain high uptime."
        },
        {
          title: "UI/UX Implementation",
          desc: "Translated design wireframes into a clean, intuitive interface focused on reducing reporting friction for employees."
        }
      ],
      achievements: [
        {
          title: "Operational Efficiency",
          desc: "Streamlined internal reporting, significantly reducing turnaround time for ticket resolution compared to manual methods."
        },
        {
          title: "Scalable Codebase",
          desc: "Designed a modular architecture that allows for easy future integration of modules like asset management or analytics."
        },
        {
          title: "Real-time Performance",
          desc: "Optimized Firestore snapshots and Riverpod providers to ensure a lag-free experience even with high volumes of active tickets."
        },
        {
          title: "Data Centralization",
          desc: "Successfully migrated fragmented departmental issue tracking into a single, transparent mobile platform."
        }
      ],
      image: "/crm.png",
      code: "https://github.com/jasim1t/crm_user"
    },
    {
      id: 3,
      title: "Feedo Logistics Platform",
      subtitle: "Food Donation & Logistics Platform",
      date: "April 2025 – Dec 2025",
      team: "App Developer (1), Designer (1)",
      techStack: ["Flutter", "Riverpod", "Firebase", "Firestore", "Auth", "Storage", "Google Maps API"],
      responsibilities: [
        {
          title: "Multi-Module Architecture",
          desc: "Designed and implemented a complex 3-way ecosystem featuring dedicated interfaces for Donors, Recipients (NGOs/Charities), and System Admins."
        },
        {
          title: "Donor Workflow",
          desc: "Developed a streamlined process for individuals and businesses to list surplus food, including image uploads via Firebase Storage and quantity tracking."
        },
        {
          title: "NGO/Receiver Interface",
          desc: "Built a real-time feed for charities to browse and claim available donations based on proximity and urgency."
        },
        {
          title: "Admin Dashboard",
          desc: "Created a centralized management module to verify new users, monitor donation lifecycles, and handle dispute resolutions."
        },
        {
          title: "Location-Based Services",
          desc: "Integrated Google Maps API to provide precise pickup locations and distance-based filtering for efficient food recovery."
        },
        {
          title: "Real-time State Management",
          desc: "Leveraged Riverpod to synchronize data across all three modules, ensuring that once food is claimed, it is instantly updated across the platform."
        }
      ],
      achievements: [
        {
          title: "Social Impact Logic",
          desc: "Engineered a solution that bridges the gap between food waste and food insecurity by automating the connection between donors and verified NGOs."
        },
        {
          title: "Database Scalability",
          desc: "Structured Cloud Firestore collections to handle high-frequency updates and complex queries involving multiple user roles and location coordinates."
        },
        {
          title: "Security & Verification",
          desc: "Implemented strict Firebase Security Rules and a verification system to ensure only legitimate charities can receive food, maintaining platform integrity."
        }
      ],
      image: "/feedo.png",
      code: "https://github.com/jasim1t"
    }
  ];

  const [activeTabs, setActiveTabs] = useState({
    1: 'responsibilities',
    2: 'responsibilities',
    3: 'responsibilities'
  });

  const toggleTab = (id, tab) => {
    setActiveTabs(prev => ({ ...prev, [id]: tab }));
  };

  return (
    <div name="portfolio" className="w-full bg-[#09090b] text-zinc-300 min-h-screen py-32 flex items-center relative z-0 border-y border-zinc-900/50">
      <div className="max-w-7xl px-6 mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="mb-20 text-center md:text-left flex flex-col md:items-start items-center">
          <p className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-accent via-brand-500 to-cyberpink uppercase mb-2">
            Selected Works
          </p>
          <h2 className="text-5xl sm:text-7xl font-extrabold text-zinc-100 tracking-tighter mb-4">
            Portfolio.
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-accent to-transparent rounded-full"></div>
        </div>

        <div className="space-y-32">
          {portfolios.map(({ id, title, subtitle, date, team, techStack, responsibilities, achievements, image, code }) => (
            <div key={id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
              
              {/* Left side: Image and Meta */}
              <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-3xl relative card-premium shadow-2xl group">
                  <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay"></div>
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 sm:h-80 object-cover rounded-3xl group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Metadata Card */}
                <div className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800/80 space-y-4">
                  <div className="flex items-center text-zinc-450 text-sm gap-3">
                    <FaCalendarAlt className="text-cyberpink shrink-0" size={16} />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center text-zinc-450 text-sm gap-3">
                    <FaUsers className="text-cyberpink shrink-0" size={16} />
                    <span>{team}</span>
                  </div>
                  <div className="border-t border-zinc-800/80 pt-4">
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                      <FaCode className="text-zinc-500" size={12} /> Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, i) => (
                        <span key={i} className="bg-zinc-950/80 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-zinc-800 hover:border-accent/50 hover:text-white transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a href={code} target="_blank" rel="noreferrer" className="w-full py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold flex items-center justify-center gap-3 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-black/30 cursor-pointer">
                  <FaGithub size={20} /> View Github Repository
                </a>
              </div>

              {/* Right side: Detailed tabs */}
              <div className="lg:col-span-7 flex flex-col">
                <p className="text-cyberpink font-semibold tracking-widest text-sm mb-2 uppercase">{subtitle}</p>
                <h3 className="text-4xl sm:text-5xl font-bold mb-8 text-zinc-100 tracking-tight leading-tight">{title}</h3>
                
                {/* Tab Buttons */}
                <div className="flex border-b border-zinc-800 mb-8 p-1 bg-zinc-950/60 rounded-xl max-w-md">
                  <button
                    onClick={() => toggleTab(id, 'responsibilities')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${activeTabs[id] === 'responsibilities' ? 'bg-zinc-900 text-white shadow-lg border border-zinc-800/80' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    <FaTasks size={14} className={activeTabs[id] === 'responsibilities' ? 'text-accent' : ''} />
                    Responsibilities
                  </button>
                  <button
                    onClick={() => toggleTab(id, 'achievements')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${activeTabs[id] === 'achievements' ? 'bg-zinc-900 text-white shadow-lg border border-zinc-800/80' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    <FaCheckCircle size={14} className={activeTabs[id] === 'achievements' ? 'text-emerald-400' : ''} />
                    Achievements
                  </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[250px] transition-all duration-500">
                  {activeTabs[id] === 'responsibilities' ? (
                    <div className="space-y-6 animate-fadeIn">
                      {responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex gap-4 items-start bg-zinc-900/20 border border-zinc-800/50 p-5 rounded-2xl hover:border-zinc-850 transition-colors">
                          <span className="h-6 w-6 rounded-full bg-brand-900/50 border border-brand-500/30 flex items-center justify-center text-xs text-accent font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <h4 className="text-zinc-100 font-semibold mb-1 text-base">{resp.title}</h4>
                            <p className="text-zinc-450 text-sm leading-relaxed font-light">{resp.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6 animate-fadeIn">
                      {achievements.map((ach, idx) => (
                        <div key={idx} className="flex gap-4 items-start bg-emerald-950/5 border border-emerald-900/10 p-5 rounded-2xl hover:border-emerald-900/25 transition-colors">
                          <span className="h-6 w-6 rounded-full bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center text-xs text-emerald-400 font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <div>
                            <h4 className="text-zinc-100 font-semibold mb-1 text-base">{ach.title}</h4>
                            <p className="text-zinc-450 text-sm leading-relaxed font-light">{ach.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
