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

          // Section slide up
          slideIn(sectionRef.current, { y: 50, duration: 800 });

          // Count up each stat
          stats.forEach((stat, i) => {
            countUp(countersRef.current[i], stat.value, {
              duration: 2000,
              delay: 200 + i * 150,
            });
          });

          // Brand logos stagger
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
      className="relative z-20 select-none font-mono"
      style={{
        backgroundColor: 'rgba(14, 14, 14, 0.7)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--border)',
        opacity: 0,
        marginTop: -2,
      }}
    >
      {/* Scanline CRT Screen Effect Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,6px_100%] pointer-events-none z-0" />

      {/* Top Laser Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--brand-red)] opacity-30 shadow-[0_0_10px_var(--brand-red)]" />

      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '40px 24px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 0,
        }}
        className="bottom-inner relative z-10"
      >
        {/* System Indicator (Hidden on small mobile) */}
        <div className="hidden lg:flex flex-col pr-8 border-r border-[var(--border)]/50 text-[9px] tracking-widest text-white/30 mr-8">
          <div className="flex items-center gap-1.5 mb-2 text-[var(--brand-red)]">
            <Activity className="h-3 w-3 animate-pulse" />
            LIVE_METRICS
          </div>
          <span>[SYS_PERFORMANCE]</span>
        </div>

        {/* Stats */}
        {stats.map((stat, i) => {
          // Convert label to tech syntax: "Brands Scaled" -> "DATA_BRANDS_SCALED"
          const techLabel = `DATA_${stat.label.replace(/ /g, '_').toUpperCase()}`;

          return (
            <div
              key={stat.label}
              style={{ padding: '0 24px' }}
              className="stat-item border-r border-[var(--border)]/50 group"
            >
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 4 }}>
                <span
                  ref={(el) => { countersRef.current[i] = el; }}
                  style={{
                    fontSize: 'clamp(24px, 3vw, 42px)',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    textShadow: '0 0 15px rgba(255,255,255,0.2)',
                  }}
                  className="transition-all duration-300 group-hover:text-[var(--brand-red)] group-hover:drop-shadow-[0_0_12px_rgba(192,38,26,0.6)]"
                >
                  0
                </span>
                <span
                  style={{
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 700,
                    color: 'var(--brand-red)',
                    lineHeight: 1,
                    marginLeft: '2px',
                  }}
                >
                  {stat.suffix}
                </span>
              </div>
              <p className="text-[10px] text-white/40 font-bold tracking-widest m-0 transition-colors duration-300 group-hover:text-white/70">
                {techLabel} //
              </p>
            </div>
          );
        })}

        {/* Trusted by Terminal Block */}
        <div
          style={{ padding: '0 32px' }}
          className="stat-item border-r border-[var(--border)]/50 flex flex-col gap-1"
        >
          <div className="flex items-center gap-1.5 text-[9px] text-white/30 tracking-widest">
            <Database className="h-3 w-3" />
            SECURE_NODES
          </div>
          <p className="text-[11px] text-[var(--brand-red)] font-bold tracking-widest leading-[1.4] m-0 uppercase drop-shadow-[0_0_5px_rgba(192,38,26,0.4)]">
            &gt; Verified <br />
            &gt; Client_Matrix
          </p>
        </div>

        {/* Brand logos Array */}
        <div
          ref={brandContainerRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
            paddingLeft: 32,
            flexWrap: 'wrap',
            flex: 1,
          }}
        >
          {brands.map((brand) => (
            <span
              key={brand}
              className="brand-logo group flex items-center gap-1 cursor-default user-select-none opacity-0 transition-all duration-300"
              style={{
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              <span className="text-[10px] opacity-0 group-hover:opacity-100 text-[var(--brand-red)] transition-opacity">
                [
              </span>
              <span
                style={{
                  fontWeight: brand === 'boAt' || brand === 'SUGAR' ? 900 : 700,
                  fontSize:
                    brand === 'boAt' || brand === 'SUGAR'
                      ? 22
                      : brand === 'The Man Company'
                      ? 11
                      : 15,
                  letterSpacing:
                    brand === 'The Man Company'
                      ? '0.1em'
                      : brand === 'SUGAR'
                      ? '0.08em'
                      : '0',
                  fontFamily: brand === 'The Man Company' ? 'var(--font-mono)' : 'inherit',
                  textTransform: brand === 'The Man Company' ? 'uppercase' : 'none',
                }}
                className="group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
              >
                {brand}
              </span>
              <span className="text-[10px] opacity-0 group-hover:opacity-100 text-[var(--brand-red)] transition-opacity">
                ]
              </span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .bottom-inner {
            gap: 32px 0 !important;
            padding: 32px 24px !important;
          }
          .stat-item {
            padding: 0 16px !important;
          }
        }
        @media (max-width: 640px) {
          .bottom-inner {
            flex-wrap: wrap !important;
          }
          .stat-item {
            min-width: 50% !important;
            padding: 16px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          /* Re-add border to the left items on mobile grid */
          .stat-item:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.05) !important;
          }
        }
      `}</style>
    </div>
  );
}