"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { animate, stagger } from "animejs"
import { ArrowRight, Globe, Smartphone, TrendingUp, Video, Cpu, Search, Users, Camera } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "We build high-performance, visually compelling websites engineered for user experience and conversion. From responsive design to scalable architecture, our focus is on creating a robust digital foundation that drives business growth.",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "We craft data-driven social media strategies that build brand awareness, foster community engagement, and deliver measurable business results across platforms like Instagram, Facebook, LinkedIn, and more.",
    link: "/services/social-media",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Our targeted campaigns are designed to maximize ROI through paid ads, retargeting, and funnel optimization. We track and optimize every rupee spent to ensure your marketing budget delivers the highest possible return.",
    link: "/services/performance-marketing",
  },
  {
    icon: Video,
    title: "UGC Content Creation",
    description: "We harness the power of user-generated content to build authentic brand trust and credibility. By amplifying your most loyal customers' voices, we create powerful, relatable connections with your target audience.",
    link: "/services/ugc-content",
  },
  {
    icon: Cpu,
    title: "AI Content Creation",
    description: "We leverage cutting-edge AI tools to generate high-quality, scalable content that is both creative and data-optimized — from blog posts and ad copy to product descriptions — keeping your brand ahead of the curve.",
    link: "/services/ai-content",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "We improve your online visibility and drive consistent organic traffic through strategic SEO — covering on-page optimization, technical audits, keyword research, and link building to rank you at the top of search results.",
    link: "/services/seo",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "We connect your brand with authentic, niche-relevant influencers who genuinely promote your products to their audiences. Our campaigns are designed to build trust, expand reach, and drive real conversions.",
    link: "/services/influencer-marketing",
  },
  {
    icon: Camera,
    title: "Branding & Product Shoot",
    description: "We capture your brand's unique identity through professional photography and creative styling. Our visual storytelling is designed to create a strong, consistent brand image across all marketing channels.",
    link: "/services/branding-shoots",
  },
]

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true
              
              // Anime.js v4.5.0 syntax
              animate(".service-card", {
                y: [60, 0],
                opacity: [0, 1],
                delay: stagger(100),
                duration: 1000,
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

  return (
    // Removed bg-[var(--background)] so the global Tron grid shows through
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Block */}
        <div className="mb-20 max-w-3xl">
          <p className="text-[var(--brand-red)] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Systems & Strategies <br />
            <span className="text-[var(--brand-red)]">Built to Scale.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            We deliver end-to-end digital capabilities designed to elevate presence, capture market interest, and convert momentum into measurable bottom-line growth.
          </p>
        </div>

        {/* Services Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Link 
              key={i} 
              href={service.link} 
              className="service-card group relative block h-full rounded-[var(--radius)] p-[2px] overflow-hidden opacity-0"
            >
              {/* --- TRON EDGE TRACER --- */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_80%,var(--brand-red)_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner Card Container */}
              <div className="relative h-full w-full bg-[var(--card)] rounded-[calc(var(--radius)-2px)] p-8 flex flex-col justify-between z-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_40px_rgba(192,38,26,0.2)]">
                
                {/* --- CYBER GRID BACKGROUND --- */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[calc(var(--radius)-2px)] pointer-events-none" />

                <div className="relative z-20">
                  {/* Glowing Icon Frame */}
                  <div className="mb-6 h-12 w-12 rounded-[var(--radius-md)] bg-black/50 border border-[var(--border)] flex items-center justify-center text-white/50 group-hover:border-[var(--brand-red)] group-hover:text-[var(--brand-red)] group-hover:shadow-[0_0_15px_rgba(192,38,26,0.5)] transition-all duration-300">
                    <service.icon className="h-6 w-6 drop-shadow-md" strokeWidth={1.8} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-white font-extrabold text-xl mb-3 tracking-tight group-hover:text-[var(--brand-red)] group-hover:drop-shadow-[0_0_8px_rgba(192,38,26,0.8)] transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-normal group-hover:text-white/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Action Link Accent */}
                <div className="relative z-20 mt-8 flex items-center gap-2 text-[var(--brand-red)] text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_5px_rgba(192,38,26,0.8)] transition-all duration-300">
                  Learn more <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}