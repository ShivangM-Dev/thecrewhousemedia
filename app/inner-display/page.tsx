// app/inner-display/page.tsx
'use client';

import { useState } from "react";
import { ArrowUpRight, TerminalSquare, Cpu, Play } from "lucide-react";

// You can import your servicesData.json here, or use this specific portfolio data
const portfolioData = [
  {
    id: "WP-01",
    title: "boAt Lifestyle",
    category: "PERFORMANCE_MKT",
    description: "Multi-channel scaling strategy that increased ROI by 40% across digital touchpoints.",
    link: "#",
  },
  {
    id: "WP-02",
    title: "Mamaearth",
    category: "GROWTH_OPS",
    description: "End-to-end digital funnel optimization for their nationwide eco-scale campaign.",
    link: "#",
  },
  {
    id: "WP-03",
    title: "Cult.fit",
    category: "SYS_ARCH",
    description: "Developed robust architecture for high-concurrency traffic during peak fitness hours.",
    link: "#",
  },
];

const page = () =>   {
  const [activeWork, setActiveWork] = useState(portfolioData[0]);

  return (
    <main className="w-screen h-screen bg-black text-white font-mono flex flex-col select-none overflow-hidden">
      
      {/* OS Top Menu Bar */}
      <div className="bg-zinc-950 px-4 py-2 flex items-center justify-between text-[10px] tracking-widest text-white/50 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <TerminalSquare size={14} className="text-[var(--brand-red)]" />
          <span>CHM_OS // V2.0.6</span>
        </div>
        <div className="flex items-center gap-2 text-[var(--brand-red)]">
          <span className="animate-pulse">●</span> LIVE_FEED
        </div>
      </div>

      {/* Main OS Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar: File Directory */}
        <div className="w-1/3 border-r border-zinc-800 flex flex-col bg-zinc-900/20">
          <div className="text-[10px] text-zinc-500 p-4 tracking-widest border-b border-zinc-800/50">
            DIRECTORY // ACTIVE_DEPLOYMENTS
          </div>
          
          <div className="flex flex-col flex-1 overflow-y-auto">
            {portfolioData.map((work) => {
              const isActive = activeWork.id === work.id;
              return (
                <button
                  key={work.id}
                  onClick={() => setActiveWork(work)}
                  className={`text-left p-4 transition-all border-l-2 ${
                    isActive 
                      ? "border-[var(--brand-red)] bg-[var(--brand-red)]/10 text-white" 
                      : "border-transparent text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300"
                  }`}
                >
                  <div className={`text-[9px] tracking-widest mb-1 ${isActive ? "text-[var(--brand-red)]" : "text-zinc-600"}`}>
                    {work.id} // {work.category}
                  </div>
                  <div className="text-sm font-bold uppercase truncate">
                    &gt; {work.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Panel: Content Viewport */}
        <div className="w-2/3 relative bg-zinc-950 flex flex-col">
          {/* Scanline CRT overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-10" />
          
          <div className="relative z-20 flex flex-col h-full p-8">
            <Cpu size={48} className="text-[var(--brand-red)]/20 mb-6 animate-pulse" />
            
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
              {activeWork.title}
            </h1>
            
            <p className="text-sm leading-relaxed text-zinc-400 max-w-md mb-8 border-l-2 border-zinc-800 pl-4">
              {activeWork.description}
            </p>

            <div className="mt-auto">
              <a 
                href={activeWork.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--brand-red)] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[0_0_15px_rgba(192,38,26,0.3)]"
              >
                EXECUTE_PROJECT_DATA
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default page;