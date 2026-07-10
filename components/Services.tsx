"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { animate, stagger } from "animejs"
import { ArrowUpRight, Globe, Smartphone, TrendingUp, Video, Cpu, Search, Users, Camera, LucideIcon } from "lucide-react"

import servicesData from "@/utils/data/serviceData.json"

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  TrendingUp,
  Video,
  Cpu,
  Search,
  Users,
  Camera,
}

// 1. Extracted HUD Component so we can reuse it on Mobile and Desktop
function TerminalHUD({ service }: { service: any }) {
  const ActiveIcon = iconMap[service.iconName] || Globe

  return (
    <div className="relative border border-[var(--border)] bg-black/40 rounded-[var(--radius-md)] overflow-hidden p-6 lg:p-8 backdrop-blur-md shadow-[inset_0_0_20px_rgba(192,38,26,0.05)] group">
      {/* Scanline CRT Screen Effect Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,6px_100%] pointer-events-none z-30" />
      
      {/* Terminal Frame Headers */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6 lg:mb-8 font-mono text-[10px] lg:text-[11px] text-white/40 tracking-widest">
        <div>HUD_STATUS: ACTIVE // {service.id}</div>
        <div className="animate-pulse text-[var(--brand-red)]">● LIVE_FEED</div>
      </div>

      {/* Data Display Content Block */}
      <div className="min-h-[280px] lg:min-h-[400px] flex flex-col justify-between relative z-20">
        <div>
          <div className="flex items-center gap-4 lg:gap-5 mb-6">
            <div className="h-12 w-12 lg:h-14 lg:w-14 border border-[var(--brand-red)]/50 bg-[var(--brand-red)]/5 flex items-center justify-center text-[var(--brand-red)] shadow-[0_0_15px_rgba(192,38,26,0.2)]">
              <ActiveIcon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white uppercase font-mono font-bold tracking-tight text-base lg:text-lg mb-1">
                {service.title}
              </h4>
              <p className="text-[var(--brand-red)] font-mono text-[10px] lg:text-xs tracking-wider font-semibold">
                {service.tagline}
              </p>
            </div>
          </div>

          <p className="text-white/70 text-sm lg:text-base leading-relaxed font-sans font-normal border-l-2 border-[var(--border)] pl-4 lg:pl-5 py-2 mb-8">
            {service.description}
          </p>
        </div>

        {/* Subsystem Telemetry Controls Block */}
        <div className="pt-6 border-t border-[var(--border)]/40 flex items-center justify-between font-mono text-[10px] lg:text-xs">
          <span className="text-white/30 tracking-wider">NET_PROP: OPTIMIZED</span>
          <Link 
            href={service.link} 
            className="inline-flex items-center gap-2 bg-[var(--brand-red)] text-white px-4 py-2 lg:px-6 lg:py-3 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors shadow-[0_0_15px_rgba(192,38,26,0.3)] hover:shadow-none"
          >
            INIT_EXECUTE 
            <ArrowUpRight className="h-3 w-3 lg:h-4 lg:w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}


export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true
              
              animate(".tech-matrix-row", {
                x: [-30, 0],
                opacity: [0, 1],
                delay: stagger(60),
                duration: 600,
                ease: "outExpo"
              })
            }
          })
        },
        { threshold: 0.1 }
      )
      
      if (containerRef.current) observer.observe(containerRef.current)
      return () => observer.disconnect()
    }
  }, [])

  const currentService = servicesData[activeIndex]

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Technical Header System */}
        <div className="mb-12 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-[var(--border)] pb-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-[var(--brand-red)] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              <span className="inline-block h-1.5 w-1.5 bg-[var(--brand-red)] animate-pulse" />
              CAPABILITIES_CORE_MATRIX
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase font-mono">
              SYSTEM_CAPABILITY
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right text-white/40 font-mono text-xs tracking-wider">
            [ LOC_SYS: //THE_CREW_HOUSE_MEDIA ]
          </div>
        </div>

        {/* Main Split Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: System Matrix Menu */}
          <div className="lg:col-span-6 flex flex-col font-mono">
            {servicesData.map((service, i) => {
              const isSelected = activeIndex === i
              return (
                <div key={service.id} className="flex flex-col">
                  {/* Clickable Row */}
                  <div
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => { if (window.innerWidth >= 1024) setActiveIndex(i) }}
                    className="tech-matrix-row opacity-0 relative border-b border-[var(--border)]/40 py-5 transition-all duration-300 flex items-center justify-between group cursor-pointer"
                  >
                    {/* Neon selector tracker element */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--brand-red)] transition-all duration-300 ${isSelected ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} />

                    <div className="flex items-center gap-4 lg:gap-6 pl-4 transition-transform duration-300 group-hover:translate-x-2">
                      <span className={`text-[10px] lg:text-xs font-bold ${isSelected ? 'text-[var(--brand-red)]' : 'text-white/20'}`}>
                        {service.id.split("-")[1]} //
                      </span>
                      <h3 className={`text-base md:text-2xl font-black tracking-tight uppercase transition-all duration-300 ${isSelected ? 'text-[var(--brand-red)] drop-shadow-[0_0_8px_rgba(192,38,26,0.6)]' : 'text-white/60 group-hover:text-white'}`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 pr-4 font-bold text-xs">
                      <span className={`hidden xl:inline text-white/20 transition-colors duration-300 ${isSelected ? 'text-[var(--brand-red)]/50' : ''}`}>
                        {service.tagline}
                      </span>
                      <span className={`transition-colors ${isSelected ? 'text-[var(--brand-red)]' : 'text-white/20'}`}>
                        {isSelected ? "[ + ]" : "[   ]"}
                      </span>
                    </div>
                  </div>

                  {/* MOBILE ONLY: Accordion Dropdown HUD */}
                  <div className={`lg:hidden grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSelected ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="pt-4 pb-2">
                        <TerminalHUD service={service} />
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          {/* DESKTOP ONLY: Live Cyber Terminal HUD Readout */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-32">
            <TerminalHUD service={currentService} />
          </div>

        </div>
      </div>
    </section>
  )
}