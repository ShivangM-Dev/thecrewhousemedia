'use client';

import { useEffect, useRef } from 'react';
import { slideIn, staggerFadeUp, countUp } from '@/lib/animate';
import { Activity, Database } from 'lucide-react';

const stats = [
  { value: 150, suffix: '+', label: 'Brands Scaled' },
  { value: 50, suffix: 'Cr+', label: 'Revenue Generated' },
  { value: 100, suffix: 'Cr+', label: 'Ad Spend Managed' },
  { value: 8, suffix: '+', label: 'Years of Growth' },
];

const brands = ['boAt', 'mamaearth', 'cult.fit', 'The Man Company', 'SUGAR'];

export default function BottomSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const brandContainerRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;

          slideIn(sectionRef.current, { y: 50, duration: 800 });

          stats.forEach((stat, i) => {
            countUp(countersRef.current[i], stat.value, {
              duration: 2000,
              delay: 200 + i * 150,
            });
          });

          if (brandContainerRef.current) {
            staggerFadeUp(
              brandContainerRef.current.querySelectorAll('.brand-logo'),
              { distance: 16, duration: 500, startDelay: 600, stagger: 80 }
            );
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-20 select-none font-mono bg-[#0e0e0e]/70 backdrop-blur-[12px] border-t border-[var(--border)] opacity-0 -mt-[2px]"
    >
      {/* Scanline CRT Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,6px_100%] pointer-events-none z-0" />
      
      {/* Laser Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--brand-red)] opacity-30 shadow-[0_0_10px_var(--brand-red)]" />

      <div className="max-w-[1320px] mx-auto px-6 py-10 md:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-0 relative z-10">
        
        {/* System Indicator */}
        <div className="hidden lg:flex flex-col pr-8 border-r border-[var(--border)]/50 text-[9px] tracking-widest text-white/30 mr-8">
          <div className="flex items-center gap-1.5 mb-2 text-[var(--brand-red)]">
            <Activity className="h-3 w-3 animate-pulse" />
            LIVE_METRICS
          </div>
          <span>[SYS_PERFORMANCE]</span>
        </div>

        {/* Stats Grid - Responsive behavior built-in */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full lg:w-auto border-t lg:border-t-0 border-[var(--border)]/30">
          {stats.map((stat, i) => {
            const techLabel = `DATA_${stat.label.replace(/ /g, '_').toUpperCase()}`;
            return (
              <div key={stat.label} className="p-6 border-b lg:border-b-0 lg:border-r border-[var(--border)]/50 group flex flex-col justify-center">
                <div className="flex items-baseline mb-1">
                  <span
                    ref={(el) => { countersRef.current[i] = el; }}
                    className="text-[28px] md:text-[42px] font-black text-white leading-none tracking-tighter transition-all duration-300 group-hover:text-[var(--brand-red)] group-hover:drop-shadow-[0_0_12px_rgba(192,38,26,0.6)]"
                  >
                    0
                  </span>
                  <span className="text-[20px] md:text-[28px] font-bold text-[var(--brand-red)] leading-none ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-[9px] md:text-[10px] text-white/40 font-bold tracking-widest transition-colors duration-300 group-hover:text-white/70">
                  {techLabel} //
                </p>
              </div>
            );
          })}
        </div>

        {/* Trusted By Block */}
        <div className="hidden md:flex p-6 border-r border-[var(--border)]/50 flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[9px] text-white/30 tracking-widest">
            <Database className="h-3 w-3" />
            SECURE_NODES
          </div>
          <p className="text-[11px] text-[var(--brand-red)] font-bold tracking-widest leading-[1.4] uppercase drop-shadow-[0_0_5px_rgba(192,38,26,0.4)]">
            &gt; Verified <br />
            &gt; Client_Matrix
          </p>
        </div>

        {/* Brand Logos */}
        <div ref={brandContainerRef} className="flex items-center justify-center lg:justify-start gap-8 px-6 flex-wrap flex-1 w-full lg:w-auto">
          {brands.map((brand) => (
            <span key={brand} className="brand-logo group flex items-center gap-1 opacity-0 cursor-default">
              <span className="text-[10px] opacity-0 group-hover:opacity-100 text-[var(--brand-red)] transition-opacity">[</span>
              <span className={`text-[15px] ${brand === 'boAt' || brand === 'SUGAR' ? 'font-black text-[22px]' : 'font-bold'} text-white/40 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all`}>
                {brand}
              </span>
              <span className="text-[10px] opacity-0 group-hover:opacity-100 text-[var(--brand-red)] transition-opacity">]</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}