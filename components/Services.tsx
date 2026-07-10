"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { animate, stagger } from "animejs"
import { ArrowUpRight, Globe, Smartphone, TrendingUp, Video, Cpu, Search, Users, Camera } from "lucide-react"

const services = [
  {
    id: "SYS-WEBDV-01",
    icon: Globe,
    title: "Web Development",
    tagline: "ARCH-SCALABLE / HIGH-PERF",
    description: "We build high-performance, visually compelling websites engineered for user experience and conversion. From responsive design to scalable architecture, our focus is on creating a robust digital foundation that drives business growth.",
    link: "/services/web-development",
  },
  {
    id: "SYS-SOCMM-02",
    icon: Smartphone,
    title: "Social Media Marketing",
    tagline: "STRAT-ENGAGE / DATA-DRIVEN",
    description: "We craft data-driven social media strategies that build brand awareness, foster community engagement, and deliver measurable business results across platforms like Instagram, Facebook, LinkedIn, and more.",
    link: "/services/social-media",
  },
  {
    id: "SYS-PERFM-03",
    icon: TrendingUp,
    title: "Performance Marketing",
    tagline: "FUNNEL-OPT / ROI-MAXIMIZER",
    description: "Our targeted campaigns are designed to maximize ROI through paid ads, retargeting, and funnel optimization. We track and optimize every rupee spent to ensure your marketing budget delivers the highest possible return.",
    link: "/services/performance-marketing",
  },
  {
    id: "SYS-UGCCC-04",
    icon: Video,
    title: "UGC Content Creation",
    tagline: "TRUST-MATRIX / SOCIAL-PROOF",
    description: "We harness the power of user-generated content to build authentic brand trust and credibility. By amplifying your most loyal customers' voices, we create powerful, relatable connections with your target audience.",
    link: "/services/ugc-content",
  },
  {
    id: "SYS-AICNT-05",
    icon: Cpu,
    title: "AI Content Creation",
    tagline: "CORE-GENERATIVE / SCALE-GEN",
    description: "We leverage cutting-edge AI tools to generate high-quality, scalable content that is both creative and data-optimized — from blog posts and ad copy to product descriptions — keeping your brand ahead of the curve.",
    link: "/services/ai-content",
  },
  {
    id: "SYS-SEOPT-06",
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "RANK-INDEX / ORGANIC-FLOW",
    description: "We improve your online visibility and drive consistent organic traffic through strategic SEO — covering on-page optimization, technical audits, keyword research, and link building to rank you at the top of search results.",
    link: "/services/seo",
  },
  {
    id: "SYS-INFLM-07",
    icon: Users,
    title: "Influencer Marketing",
    tagline: "NODE-AMPLIFY / MATRIX-REACH",
    description: "We connect your brand with authentic, niche-relevant influencers who genuinely promote your products to their audiences. Our campaigns are designed to build trust, expand reach, and drive real conversions.",
    link: "/services/influencer-marketing",
  },
  {
    id: "SYS-BRAND-08",
    icon: Camera,
    title: "Branding & Product Shoot",
    tagline: "VIS-STORY / ASSET-CAPTURE",
    description: "We capture your brand's unique identity through professional photography and creative styling. Our visual storytelling is designed to create a strong, consistent brand image across all marketing channels.",
    link: "/services/branding-shoots",
  },
]

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

  const currentService = services[activeIndex]
  const ActiveIcon = currentService.icon

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Technical Header System */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-[var(--border)] pb-8">
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
          
          {/* LEFT: System Matrix Menu (Changed to col-span-6 for 50/50 split) */}
          <div className="lg:col-span-6 flex flex-col font-mono">
            {services.map((service, i) => {
              const isSelected = activeIndex === i
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(i)}
                  className="tech-matrix-row opacity-0 relative border-b border-[var(--border)]/40 py-5 transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  {/* Neon selector tracker element */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--brand-red)] transition-all duration-300 ${isSelected ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} />

                  <div className="flex items-center gap-6 pl-4 transition-transform duration-300 group-hover:translate-x-2">
                    <span className={`text-xs font-bold ${isSelected ? 'text-[var(--brand-red)]' : 'text-white/20'}`}>
                      {service.id.split("-")[1]} //
                    </span>
                    <h3 className={`text-lg md:text-2xl font-black tracking-tight uppercase transition-all duration-300 ${isSelected ? 'text-[var(--brand-red)] drop-shadow-[0_0_8px_rgba(192,38,26,0.6)]' : 'text-white/60 group-hover:text-white'}`}>
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
              )
            })}
          </div>

          {/* RIGHT: Live Cyber Terminal HUD Readout (Changed to col-span-6 for 50/50 split) */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            {/* Increased padding from p-6 to p-8 */}
            <div className="relative border border-[var(--border)] bg-black/40 rounded-[var(--radius-md)] overflow-hidden p-8 backdrop-blur-md shadow-[inset_0_0_20px_rgba(192,38,26,0.05)] group">
              
              {/* Scanline CRT Screen Effect Accent */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,6px_100%] pointer-events-none z-30" />
              
              {/* Terminal Frame Headers */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-8 font-mono text-[11px] text-white/40 tracking-widest">
                <div>HUD_STATUS: ACTIVE // {currentService.id}</div>
                <div className="animate-pulse text-[var(--brand-red)]">● LIVE_FEED</div>
              </div>

              {/* Data Display Content Block (Increased min-height to 400px) */}
              <div className="min-h-[400px] flex flex-col justify-between relative z-20">
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    {/* Increased icon box size */}
                    <div className="h-14 w-14 border border-[var(--brand-red)]/50 bg-[var(--brand-red)]/5 flex items-center justify-center text-[var(--brand-red)] shadow-[0_0_15px_rgba(192,38,26,0.2)]">
                      <ActiveIcon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <div>
                      {/* Scaled up text sizes */}
                      <h4 className="text-white uppercase font-mono font-bold tracking-tight text-lg mb-1">
                        {currentService.title}
                      </h4>
                      <p className="text-[var(--brand-red)] font-mono text-xs tracking-wider font-semibold">
                        {currentService.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Scaled up description font size */}
                  <p className="text-white/70 text-base leading-relaxed font-sans font-normal border-l-2 border-[var(--border)] pl-5 py-2 mb-8">
                    {currentService.description}
                  </p>
                </div>

                {/* Subsystem Telemetry Controls Block */}
                <div className="pt-6 border-t border-[var(--border)]/40 flex items-center justify-between font-mono text-xs">
                  <span className="text-white/30 tracking-wider">NET_PROP: OPTIMIZED</span>
                  {/* Scaled up button sizing */}
                  <Link 
                    href={currentService.link} 
                    className="inline-flex items-center gap-2 bg-[var(--brand-red)] text-white px-6 py-3 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors shadow-[0_0_15px_rgba(192,38,26,0.3)] hover:shadow-none"
                  >
                    INIT_EXECUTE 
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}